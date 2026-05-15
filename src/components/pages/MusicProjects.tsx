
import '@/App.css'
import { AccordionCard } from '../parts/AccordionCard'
import { TrackDetail } from '../parts/TrackDetail';
import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

function MusicProjects() {
    const { albums } = useContext(GlobalContext);
    return (
        <ul className='flex flex-row md:px-5 flex-wrap'>
            {albums.getAlbums.map((album, albumIndex) => (
                <li key={'album-' + album.title + albumIndex} className='flex flex-1 flex-col h-full justify-center items-center py-4'>
                    <AccordionCard
                        title={album.title}
                        className={('xl:w-75 w-fit min-w-75 ') + ((albumIndex == albums.getAlbums.length - 1) ? "  max-md:mb-25" : " ")}
                    >
                        <ul className='flex flex-col p-2 pt-0 m-2 place-items-center list-none'>
                            <li key={'albumImage-' + album.title} className='relative size-fit scale:100 transition-transform duration-300 hover:scale-105 mb-4'>
                                <img src={album.imageUrl} alt={'An album cover for the ' + album.title + " album made by Juan Pablo Amorocho."} className='object-cover size-55 rounded-xs shadow-sm drop-shadow-chart-1 shadow-black' loading='lazy' />
                            </li>
                            {album.tracks.map((track, tracksIndex) => (
                                <li key={'track-' + track.title + tracksIndex} className='justify-center'>
                                    <TrackDetail songIndex={tracksIndex} albumIndex={albumIndex} albumLibrary={albums} />
                                </li>
                            ))}
                        </ul>
                    </AccordionCard>
                </li>
            ))}
        </ul>
    )
}

export default MusicProjects
