import '@/App.css'
import { AccordionCard } from '../parts/AccordionCard'
import { GetArtProjects, GetPixelArtProjects } from '@/data/ArtProjectsData'
import { useState } from 'react'
import { ArtGalleryModal } from '../parts/ArtGalleryModal'
import ArtLogoLightMode from "@/assets/art_logos/ArtLogoLightMode.svg"
import PixelArtLogo from "@/assets/art_logos/pixelArtLogo.svg"
import ArtLogoDarkMode from "@/assets/art_logos/ArtLogoDarkMode.svg"

function ArtProjects() {

    const [isModalOpen, setModalOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [galleryNo, setGalleryNo] = useState(0 | 1);


    function openModal(index: number, galleryNo: number) {
        setModalOpen(true)
        setCurrentIndex(index)
        setGalleryNo(galleryNo);
    }
    function closeModal() {
        setModalOpen(false)
    }
    function getCurrentGallery(galleryNo: number) {
        switch (galleryNo) {
            case 0:
                return GetArtProjects();
            case 1:
                return GetPixelArtProjects();
            default: return GetArtProjects();
        }
    }
    return (
        <>
            <div className={('flex flex-1 flex-col h-full justify-center items-center py-4 ') + (isModalOpen ? 'pointer-events-none' : 'pointer-events-auto')}>
                <AccordionCard title='illustrations' logoSrc={ArtLogoLightMode} logoLabel='Pixel Art Logo of a Pencil' darkLogoSrc={ArtLogoDarkMode} className='xl:w-250 w-fit min-w-1/2 max-md:mb-25'>
                    <div className='flex justify-center items-center'>
                        <div dir='ltr' className='flex flex-row flex-wrap size-full justify-center gap-2.5'>
                            {GetArtProjects().map((item, index) => (
                                <div className='relative size-fit scale:100 transition-transform duration-300 hover:scale-105' key={'image-' + item.source}>
                                    <img src={item.thumbnail ? item.thumbnail : item.source} alt={item.alt} className='object-cover h-55 w-auto rounded-xs shadow-sm drop-shadow-chart-1 shadow-black' loading='lazy' />
                                    <button className='flex absolute top-0 size-full items-center justify-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-100' onClick={(_) => { openModal(index, 0) }} aria-label='Zooms into the selected image. ' key={index}>
                                        <p className='text-xl text-cyan-300'><b>+</b></p>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </AccordionCard>
                <AccordionCard title='pixel art' logoSrc={PixelArtLogo} logoLabel="Pixel Art Logo of a Small Surprised Face" className='xl:w-250 w-fit min-w-1/2 max-md:mb-25' logoClassName='size-8'>
                    <div className='flex justify-center items-center'>
                        <div dir='ltr' className='flex flex-row flex-wrap size-full justify-center gap-2.5'>
                            {GetPixelArtProjects().map((item, index) => (
                                <div className='relative size-fit scale:100 transition-transform duration-300 hover:scale-105' key={'image-' + item.source}>
                                    <img src={item.thumbnail ? item.thumbnail : item.source} alt={item.alt} className='object-cover h-55 w-auto rounded-xs shadow-sm drop-shadow-chart-1 shadow-black' loading='lazy' />
                                    <button className='flex absolute top-0 size-full items-center justify-center z-10 opacity-0 transition-opacity duration-300 hover:opacity-100' onClick={(_) => { openModal(index, 1) }} key={index}>
                                        <p className='text-xl text-cyan-300'><b>+</b></p>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </AccordionCard>
            </div>
            <ArtGalleryModal index={currentIndex} openModal={isModalOpen} closeModal={closeModal} gallery={getCurrentGallery(galleryNo)} />

        </>
    )
}

export default ArtProjects
