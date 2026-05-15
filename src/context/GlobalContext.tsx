import { Albums } from '@/data/AlbumData';
import { Projects } from '@/data/Projects';
import {
    useState,
    createContext,
    type ReactNode
} from 'react';
type Props = {
    children: ReactNode
}
type trackIndex = {
    album: number, track: number
}
const GlobalContext = createContext(
    {
        theme: "",
        sound: true,
        albums: new Albums(),
        playingMusic: false,
        backgroundClass: 0,
        selectedMusic: { album: -1, track: -1 },
        volume: 0,
        projects: new Projects(),
        toggleTheme: () => { console.log("Triggered Placeholder Context Function for toggleTheme...") },
        pauseMusic: () => { },
        toggleSound: () => { console.log("Triggered Placeholder Context Function for toggeSound...") },
        toggleMusic: (album: number = -1, track: number = -1, repeatTrack: boolean = false) => { console.log("Triggered Placeholder Context Function for pleyyMysic..." + track + album + repeatTrack) },
        stopMusic: () => { console.log("Triggered Placeholder Context Function for stahpMaisic...") },
        changeBackground: (backgroundUrl: number) => { console.log("Triggered Placeholder Context Function for changeBG..." + backgroundUrl) },
        changeVolume: (newVolume: number) => { console.log(newVolume) }
    })
export const GlobalContextProvider = ({ children }: Props) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [sound, setSound] = useState(false);
    const [playingMusic, setPlayingMusic] = useState<boolean>(false); //whether the music is being played across the page
    const [selectedMusic, setSelectedTrack] = useState<trackIndex>({ album: -1, track: -1 });
    const [backgroundClass, setBG] = useState(0);
    const [volume, setVolume] = useState(100);

    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark' || (!("theme" in localStorage)
        && window.matchMedia("(prefers-color-scheme: dark)").matches));

    const projects = new Projects()


    const albums = new Albums();

    const toggleTheme = () => { setTheme(theme === 'light' ? 'dark' : 'light'); }

    const toggleSound = () => {
        setSound(prev => prev = !prev);
    }
    const changeVolume = (newVolume: number) => {
        setVolume((prev) => {
            prev = newVolume;
            if (prev == 0) {
                setSound(true);
            }
            else {
                setSound(false);
            }
            return prev;
        });

    }
    const changeBackground = (backgroundUrl: number) => {
        setBG(backgroundUrl);
    }
    const toggleMusic = (album: number = selectedMusic.album, musicTrack: number = selectedMusic.track, repeatTrack: boolean = false) => {
        //If the track has changed. 
        if (selectedMusic.album !== album || selectedMusic.track !== musicTrack) {
            setSelectedTrack({ album: album, track: musicTrack });
            setPlayingMusic(true);
        }
        else if (repeatTrack && selectedMusic.album === album && selectedMusic.track === musicTrack) // is Repeating
        {
            setPlayingMusic(true)
        }
        else setPlayingMusic(prev => !prev);
    }
    const pauseMusic = () => {
        setPlayingMusic(false);
    }
    const stopMusic = () => {
        setPlayingMusic(false);
        setSelectedTrack({ album: -1, track: -1 });
    }
    const context =
    {
        theme,
        sound,
        albums,
        backgroundClass,
        selectedMusic,
        playingMusic,
        volume,
        projects,
        toggleTheme,
        toggleSound,
        toggleMusic,
        stopMusic,
        pauseMusic,
        changeBackground,
        changeVolume
    }
    return (
        <GlobalContext.Provider value={context}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;