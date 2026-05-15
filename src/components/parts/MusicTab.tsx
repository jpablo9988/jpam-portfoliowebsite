
import GlobalContext from '@/context/GlobalContext';
import { MusicPlayer } from './MusicPlayer'
import { useContext } from 'react';

export default function MusicTab() {
    const { selectedMusic } = useContext(GlobalContext)
    return (
        <div className={(selectedMusic.album != -1 && selectedMusic.track != -1) ? 'fixed w-screen pointer-events-auto h-20 left-0 bottom-0 z-20 max-sm:bg-sidebar sm:top-0 sm:pointer-events-none' : "hidden "}>
            <div className='flex size-full sm:col-start-2 justify-center items-center'>
                <MusicPlayer />
            </div>
        </div>
    );
}
