import { useContext, useEffect, useMemo, useRef, useState } from "react"
import GlobalContext from "@/context/GlobalContext";
import { useInterval } from "@/hooks/useInterval";
import { type Track } from "@/data/AlbumData";
import ScaleButton from "./buttons/ScaleButton";
import PlayLogo from "@/assets/music_logos/PlayLogoV2.svg"
import PauseLogo from "@/assets/music_logos/PauseLogoV2.svg"
import FastFowardLogo from "@/assets/music_logos/FastFowardLogoLight.svg"
import RewindLogoLight from "@/assets/music_logos/RewindLogoLight.svg"
import RandomizeLogoLight from "@/assets/music_logos/RandomizeLogoLight.svg"
import RewindLogoSolo from "@/assets/music_logos/RewindLogoLightSolo.svg"
import ToggleButton from "./buttons/ToggleButton";
export const MusicPlayer = () => {
    const [music, setMusic] = useState<Track>();
    const [currentTime, setCurrentTime] = useState<number>(0);
    const { toggleMusic, selectedMusic, playingMusic, albums, sound, theme } = useContext(GlobalContext)
    const intervalTimer = useInterval(onTimeChange, 100, false);
    const [isRandom, setIsRandom] = useState<boolean>(false);
    const [loopType, setLoopType] = useState<number>(0);// loopType: 0 = No Loop, 1 = Loop, 2 = LoopCurrent
    let currentMusicId = useRef<number | null>(null);

    function handleToggle() {
        if (music == null) return;
        if (selectedMusic.album === -1 && selectedMusic.track === -1) return;
        toggleMusic();
    }
    function toggleLoopTypes() {
        setLoopType((prev) => {
            prev++;
            if (prev > 2) prev = 0;
            return prev;
        })
    }
    function toggleRandom() {
        setIsRandom(prev => !prev);
    }
    function handleNext(albumIndex: number, trackIndex: number, direction: number, fromEndSong: boolean) {
        if (music == null) return;
        if (selectedMusic.album === -1 && selectedMusic.track === -1) return;
        let nextIndex = -1;
        let willRepeat = false;
        if (isRandom && loopType !== 2) {
            nextIndex = albums.getNextInAlbum(selectedMusic.album,
                selectedMusic.track,
                1,
                loopType == 1,
                isRandom
            );
            console.log(nextIndex);
        }
        else if (loopType === 1) {
            nextIndex = albums.getNextInAlbum(selectedMusic.album,
                selectedMusic.track,
                direction,
                true,
                false
            );
        }
        else if (loopType === 2 && fromEndSong) {
            nextIndex = trackIndex;
            willRepeat = true;
        } //loopType === 2 means it loops the current track. {
        else nextIndex = albums.getNextInAlbum(albumIndex, trackIndex, direction);

        if (nextIndex === trackIndex) {
            music?.src.seek(0); //If it's the same song (reached a limit.), reset the song and pause. 
        }
        toggleMusic(albumIndex, nextIndex, willRepeat);
        if (loopType === 2 && fromEndSong) {
            //BANDAID: Make it reusable. 
            if (currentMusicId.current)
                currentMusicId.current = music.src.play(currentMusicId.current);
            else
                currentMusicId.current = music.src.play();
            intervalTimer.resume();
        }
    }
    function formatTime(timeInSeconds: number) {
        const minutes = Math.floor(timeInSeconds / 60)
        const seconds = Math.floor(timeInSeconds % 60)

        const formattedMinutes = String(minutes).padStart(2, '0')
        const formattedSeconds = String(seconds).padStart(2, '0')

        return `${formattedMinutes}:${formattedSeconds}`
    }
    function handleSeekChange(e: any) {
        if (music === null) return;
        let seekTime = 0;
        seekTime = parseInt(e.target.value, 10);
        setCurrentTime(seekTime);
        music?.src.seek(seekTime);
    }
    function onTimeChange() {
        if (currentMusicId.current === null || music === null) {
            setCurrentTime(0);
            return;
        }
        if (music && currentMusicId.current) {
            const seekTimer = Math.round(music?.src.seek(currentMusicId.current))
            setCurrentTime(seekTimer)
        }
    }
    useEffect(() => {
        if (music) {
            if (currentMusicId.current) {
                if (playingMusic) {
                    currentMusicId.current = music.src.play(currentMusicId.current);
                    intervalTimer.resume();
                }
                else {
                    music.src.pause(currentMusicId.current);
                    intervalTimer.pause();
                }
            }
            else {
                currentMusicId.current = music.src.play();
                intervalTimer.resume();
            }
        }

    }, [playingMusic, selectedMusic])
    useEffect(() => {
        if (music && currentMusicId.current) {
            music.src.off('end', currentMusicId.current); //Clear previous listener.
            music.src.on('end', function () {
                handleNext(selectedMusic.album, selectedMusic.track, 1, true)
                setCurrentTime(0);
            }, currentMusicId.current);
        }
    }, [isRandom, loopType, music])
    useMemo(() => {
        if (music && currentMusicId.current) {
            music.src.stop(currentMusicId.current);
            intervalTimer.pause();
            currentMusicId.current = null;
        }
        if (selectedMusic.album != -1 && selectedMusic.track != -1) {
            setMusic(albums.getAlbums[selectedMusic.album].tracks[selectedMusic.track]);
        }
        setCurrentTime(0);
    }, [selectedMusic])
    useMemo(() => {
        music?.src.mute(sound)
    }, [sound])

    return (
        <div className="flex flex-row gap-x-5 items-center pointer-events-auto">
            <ScaleButton
                defaultLogo={FastFowardLogo}
                className="size-8 max-md:size-6 min-w-6 min-h-6 rotate-180"
                onClickAction={() => { handleNext(selectedMusic.album, selectedMusic.track, -1, false) }}
                buttonLabel="Goes to any previous song in an album playlist."
                logoLabel="A logo of a skip backwards button normally found on music players."
            />
            {playingMusic ?
                <ScaleButton
                    defaultLogo={PauseLogo}
                    className="size-4  min-w-4 min-h-4"
                    onClickAction={handleToggle}
                    buttonLabel="Pauses the current song."
                    logoLabel="A logo of a pause button normally found on music players."

                />
                :
                <ScaleButton
                    defaultLogo={PlayLogo}
                    className="size-4 min-w-4 min-h-4"
                    onClickAction={handleToggle}
                    buttonLabel="Plays the current song. "
                    logoLabel="A logo of a play button normally found on music players."
                />
            }
            <ScaleButton
                defaultLogo={FastFowardLogo}
                className="size-8 max-md:size-6 min-w-6 min-h-6 "
                onClickAction={() => { handleNext(selectedMusic.album, selectedMusic.track, 1, false) }}
                logoLabel="A logo of a skip fowards button normally found on music players."
                buttonLabel="Goes to the next song in an album playlist."
            />
            <div>
                <p className="text-center text-xs max-[450px]:hidden m-2"> {music ? music.title : ""} <br /> <span className="text:2xs opacity-50"> {selectedMusic && selectedMusic.album !== -1 ? albums.getAlbums[selectedMusic.album].title : ""}</span></p>
            </div>
            <div className="flex flex-row m-3 gap-x-2.5 relative">
                <ToggleButton key='randomizeButton' toggleTracker={isRandom} src={RandomizeLogoLight}
                    toggleMaskUrl='/RandomizeLogoLight.svg'
                    spriteSize="size-4 min-w-4 min-h-4 "
                    onClickAction={toggleRandom}
                    buttonLabel="Toggles music shuffle for the current playlist"
                    logoLabel="A logo of two arrows intertwining, normally found on music players to represent shuffle."
                />
                <ToggleButton key='rewindButtom' toggleTracker={loopType === 1} src={RewindLogoLight}
                    toggleMaskUrl="/RewindLogoLight.svg"
                    spriteSize="size-4   min-w-4 min-h-4"
                    className={(loopType === 2 ? "hidden absolute pointer-events-none " : "")}
                    onClickAction={toggleLoopTypes}
                    buttonLabel="Toggles a repeating playlist for the current playlist"
                    logoLabel="A logo of a arrow doing a loop." />
                <ToggleButton key='rewindButtomSolo' toggleTracker={loopType === 2} src={RewindLogoSolo}
                    toggleMaskUrl="/RewindLogoLightSolo.svg"
                    spriteSize="size-4 min-w-4 min-h-4"
                    className={(loopType !== 2 ? "hidden absolute pointer-events-none " : "")}
                    onClickAction={toggleLoopTypes}
                    buttonLabel="Toggles repeating the current song forever."
                    logoLabel="A logo of a arrow doing a loop with a small one." />
            </div>
            <div className="flex flex-col justify-center">
                <p>{formatTime(currentTime)} / {music ? music?.duration : '0:00'}</p>
                <input
                    className={(" rounded-sm cursor-pointer w-30 max-lg:w-25 " + (theme === "dark" ? "accent-yellow-500" : "accent-blue-500"))}
                    type="range"
                    min="0"
                    max={music ? music?.src.duration() : 0}
                    value={currentTime || 0}
                    onChange={handleSeekChange}
                    alt="Marks the progress of the current song. Can be moved around. "
                    aria-label="Marks the progress of the current song. Can be moved around. "
                />
            </div>
        </div>
    )
}