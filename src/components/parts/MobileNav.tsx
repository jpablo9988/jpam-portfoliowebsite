// MobileNav.tsx
import { useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import TabLogoLightMode from "@/assets/tab_logos/TabLogoLightMode.svg"
import TabLogoDarkMode from "@/assets/tab_logos/TabLogoDarkMode.svg"
import MainSideNav from './MainSideNav';
import ScaleButton from './buttons/ScaleButton';

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            {/* This button will trigger open the mobile sheet menu */}
            <SheetTrigger asChild>
                <ScaleButton
                    id={200}
                    key={200}
                    defaultLogo={TabLogoLightMode}
                    defaultLogoDark={TabLogoDarkMode}
                    className='sm:hidden max-sm:size-12'
                    onClickAction={() => { setOpen(prev => prev = !prev) }

                    }
                    buttonLabel='Toggles the mobile navigation menu. '
                    logoLabel='A logo that has three parallel horizontal bars one on top of each other. '
                />
            </SheetTrigger>

            <SheetContent side="left" className='w-35 bg-sidebar'>
                <SheetTitle className='sr-only'>
                    Page Navigation Menu
                </SheetTitle>
                <SheetDescription className='sr-only'>
                    Mobile Navigation Menu pop-up with the following button options from top to bottom: Home, About, Portafolio and Contact.
                </SheetDescription>
                <div className="grid grid-flow-row items-center h-screen w-35">
                    <MainSideNav />
                </div>
            </SheetContent>

        </Sheet>
    );
}
