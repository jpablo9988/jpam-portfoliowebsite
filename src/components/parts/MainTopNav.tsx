import LightLogo from '@/assets/LightLogo.svg'
import DarkLogo from '@/assets/DarkLogo.svg'
import SoundLogoLightMode from '@/assets/sound_logos/SoundLogoLightMode.svg'
import SoundLogoLightModeMuted from '@/assets/sound_logos/SoundLogoLightMode_deactive.svg'
import { useContext, useEffect, useState } from 'react';
import ScaleButton from './buttons/ScaleButton';
import GlobalContext from '@/context/GlobalContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

//Volume controller
/*             <label htmlFor="volumeController">Volume</label>
            <input
                className="cursor-pointer"
                name="volumeController"
                onChange={handleVolumeChange}
                type="range"
                max="100"
                defaultValue="75"

                    function handleVolumeChange(e: any) {
        Howler.volume(parseInt(e.target.value, 10) / 100);
    }
            /> */

export default function MainTopNav() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { toggleTheme, toggleSound, sound, theme, changeVolume, volume } = useContext(GlobalContext)
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 1024) {
            setIsLargeScreen(true)
        } else {
            setIsLargeScreen(false)
        }
    }
    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    function handleVolumeChange(e: any) {
        Howler.volume(parseInt(e.target.value, 10) / 100);
        changeVolume(e.target.value)
    }
    function dropdownVolume() {
        return (
            <DropdownMenu
                open={dropdownOpen}
                onOpenChange={setDropdownOpen}
                modal={false}>
                <DropdownMenuTrigger asChild>
                    <div>
                        {!isLargeScreen ? <ScaleButton key={"volBiggerDropdown"}
                            id={0}
                            onClickAction={toggleSound}
                            onHoverAction={setDropdownOpen}
                            defaultLogo={SoundLogoLightMode}
                            onToggleLogo={SoundLogoLightModeMuted}
                            toggleCondition={sound}
                            logoLabel='Speaker logo that can be muted.'
                            buttonLabel='Opens volume slider when hovered or focused. Mutes when pressed. '
                            className={(' transition delay-50 duration-150 ease-in-out lg:size-14 max-lg:size-12 max-lg:hidden ') + (theme === 'light' ? '' : 'invert')} />
                            : <ScaleButton key={"volOnMediumDropdown"}
                                id={1}
                                onClickAction={() => setDropdownOpen(true)}
                                defaultLogo={SoundLogoLightMode}
                                onToggleLogo={SoundLogoLightModeMuted}
                                toggleCondition={sound}
                                buttonLabel='Opens volume slider when pressed. '
                                className={(' transition delay-50 duration-150 ease-in-out lg:size-14 max-lg:size-12 lg:hidden ') + (theme === 'light' ? '' : 'invert')} />}
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent side='bottom' className='flex flex-wrap size-fit items-center justify-center' sideOffset={-2}>
                    <DropdownMenuItem asChild onSelect={event => event.preventDefault()}>{
                        <input
                            className={("cursor-pointer [writing-mode:sideways-lr] ") + (theme === "dark" ? "accent-yellow-500" : "accent-blue-500")}
                            name="volumeController"
                            onChange={handleVolumeChange}
                            type="range"
                            max="100"
                            defaultValue={volume}
                            aria-label='Volume Slider (Left Arrow to lower volume, Right arrow to raise volume).'
                        />}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
    return (
        <div className='grid grid-flow-col sm:grid-cols-3 grid-cols-2 size-full'>
            <div className='flex size-full sm:col-start-2 justify-center items-center'>
            </div>
            <div className="flex flex-row size-full mr-4 gap-x-3 sm:col-start-3 items-center justify-end">
                <div className='flex size-fit' onMouseLeave={() => setDropdownOpen(false)}>
                    {dropdownVolume()}
                </div>
                <ScaleButton key={1}
                    id={1}
                    onClickAction={toggleTheme}
                    defaultLogo={LightLogo}
                    defaultLogoDark={DarkLogo}
                    className='size-14 max-lg:size-12'
                    buttonLabel='Dark Mode Toggle'
                    logoLabel='Dark Mode Logo resembling a star.' />
            </div>
        </div>
    );
}
