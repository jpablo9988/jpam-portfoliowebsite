import '@/App.css'
import CD from '@/assets/home_logos/CenterCD.png'
import ScaleButton from '../parts/buttons/ScaleButton'
import { AccordionCard } from '../parts/AccordionCard'
import GlobalContext from '@/context/GlobalContext'
import { useContext, useState } from 'react'
function Home() {
    const { albums, toggleMusic, pauseMusic, playingMusic } = useContext(GlobalContext)
    const [currIndex, SetCurrIndex] = useState(0)
    function handleMusicToggle(targetAlbum: number) {
        if (playingMusic) {
            pauseMusic();
            return;
        }
        SetCurrIndex(curr => albums.getNextInAlbum(targetAlbum, curr, 1, true, true));
        toggleMusic(0, currIndex, false);
    }
    return (
        <div
            className='flex flex-1 flex-col h-full justify-center items-center'
        >
            <AccordionCard title={"welcome!"} description={"an introductory panel showing welcoming you to the site."}
                className='xl:w-120 w-fit min-w-1/2'>
                <div className='flex flex-initial flex-col h-full w-full gap-y-3 text-wrap max-sm:p-2'>
                    <h1>
                        My name is JP!
                    </h1>
                    <h2>programmer, musician, artist</h2>
                    <div className='flex items-center justify-center'>

                        <ScaleButton
                            id={100}
                            key={100}
                            defaultLogo={CD}
                            defaultLogoDark={CD}
                            className={('sm:size-68 max-sm:size-50 rotate-forever ') + (playingMusic ? '' : 'stop ')}
                            scaleOnHover={1.05}
                            scaleOnClick={1.05}
                            isEager={true}
                            buttonLabel='Plays a random song from the Site Surfing Album, always starting with its first track.'
                            logoLabel='A pixel art version of a vinyl record with a cartoony face and text that says Try Me. '
                            onClickAction={() => handleMusicToggle(0)} // -- Web Surfing Album
                        />

                    </div>
                    <p className='opacity-50'> © 2026 Juan Pablo Amorocho </p>
                </div>
            </AccordionCard>

        </div>
    )
}

export default Home
