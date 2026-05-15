import { useState } from 'react';
import MainTopNav from './parts/MainTopNav.tsx'
import MobileNav from './parts/MobileNav.tsx';

export default function TopHeader() {
    const [isTopOfPage, setIsTopOnPage] = useState<boolean>(false)
    function checkIfWindowOnTop(): void {
        setIsTopOnPage(window.pageYOffset > 32);
    }
    window.addEventListener("scroll", checkIfWindowOnTop)
    return (
        <header className={("w-screen sticky top-0 left-0 z-10 transition-colors duration-500 ") + (isTopOfPage ? 'bg-sidebar' : 'bg-none')}>
            <div className="grid grid-flow-col justify-items-end items-center px-4 h-18">
                <div className="max-sm:flex max-sm:w-full max-sm:justify-items-start sm:hidden">
                    <MobileNav />
                </div>
                <MainTopNav />

            </div>
        </header>
    );
}