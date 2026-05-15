import GlobalContext from "@/context/GlobalContext";
import { Albums } from "@/data/AlbumData";
import { useContext } from "react"
import PlayLogo from "@/assets/music_logos/PlayLogoV2.svg"
import PauseLogo from "@/assets/music_logos/PauseLogoV2.svg"
import ScaleDiv from "./buttons/ScaleDiv";

type trackDetailProps = {
    songIndex: number,
    albumIndex: number,
    albumLibrary: Albums
}
export const TrackDetail = (props: trackDetailProps) => {
    const { toggleMusic, selectedMusic, playingMusic } = useContext(GlobalContext)
    function handleToggle() {
        toggleMusic(props.albumIndex, props.songIndex);
    }

    const isCurrentlyPlaying = selectedMusic.album === props.albumIndex
        && selectedMusic.track === props.songIndex
        && playingMusic;
    const currTrack = props.albumLibrary.getTrack(props.albumIndex, props.songIndex);

    return (
        <button className="relative grid grid-flow-col rounded-xs justify-normal items-center px-2 my-0.5 w-65" onClick={handleToggle} aria-label={"A button that plays or pauses the track " + currTrack.title}>
            <div className="size-fit z-1">
                <div className="size-fit py-0.5">
                    {isCurrentlyPlaying ?
                        <ScaleDiv
                            defaultLogo={PauseLogo}
                            className="size-4"
                            logoLabel="A pause music logo"

                        />
                        :
                        <ScaleDiv
                            defaultLogo={PlayLogo}
                            className="size-4"
                            logoLabel="A play music logo"

                        />
                    }
                </div>
            </div>
            <div className="col-span-10 overflow-hidden text-wrap pointer-events-none z-1"> <p> {currTrack.title}</p></div>
            <div> <p> {currTrack.duration}</p></div>
            <div className="absolute top-0 size-full bg-sidebar hover:bg-amber-300 opacity-25" />
        </button>
    )

}