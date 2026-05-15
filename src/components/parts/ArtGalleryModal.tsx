import type { ArtProjectItem } from "@/data/ArtProjectsData"
import Modal from 'react-modal';

interface ArtGalleryModalProps {
    index: number,
    openModal: boolean,
    closeModal: () => void
    gallery: ArtProjectItem[]
}

export const ArtGalleryModal = (props: ArtGalleryModalProps) => {
    const appElement = document.getElementById('main_screen');
    if (appElement)
        Modal.setAppElement(appElement);
    return (
        <Modal
            isOpen={props.openModal}
            onRequestClose={props.closeModal}
            closeTimeoutMS={200}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'auto'
                },
                content:
                {
                    width: '100%',
                    height: '100%',
                    background: 'none',
                    border: 'none',
                    alignItems: 'center',
                    placeItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    inset: '0'
                }
            }}
            shouldCloseOnOverlayClick={true}
        >

            <div className="flex flex-col place-self-center">
                <button className="flex flex-col gap-5 justify-center items-center" onClick={props.closeModal} aria-label="Zooms-out of the selected image. ">
                    <img src={props.gallery[props.index].source} alt={props.gallery[props.index].alt} loading="lazy" className=" object-scale-down cursor-zoom-out h-110 z-30">
                    </img>
                    <div className="flex justify-center flex-wrap"><h3 className="text-white">{props.gallery[props.index].alt}</h3></div>
                </button>
            </div>
        </Modal>
    )
}