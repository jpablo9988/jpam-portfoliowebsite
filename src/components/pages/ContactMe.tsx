import '@/App.css'
import { AccordionCard } from '../parts/AccordionCard'
import ScaleDiv from '../parts/buttons/ScaleDiv'
import msg from "@/assets/contact_logos/msg.svg"
import linkedin from "@/assets/contact_logos/linkedin.svg"
import github from "@/assets/contact_logos/git.svg"
import itchio from "@/assets/contact_logos/itchio.svg"

import { useContext } from 'react'
import GlobalContext from '@/context/GlobalContext'
function ContactMe() {
    const { theme } = useContext(GlobalContext)

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard: " + text)
    }
    return (
        <div
            className='flex flex-1 flex-col h-full justify-center items-center p-3 md:mb-25'
        >
            <AccordionCard title={"reach me out!"} description={'describes how to reach me by mail'}
                className='w-fit max-md:min-w-1/2 min-w-1/4'
                logoSrc={msg}
                logoClassName='sm:size-14 max-sm:size-12'
                logoLabel='Pixel Art Logo of an envelope.'>
                <p> The easiest way to contact me is through e-mail. <br />I'll respond as soon as
                    I can!
                    <br />
                </p>
                <div className='grid grid-flow-col grid-rows-2 gap-3'>
                    <a target="_blank" className={('flex justify-center items-center rounded-sm relative border-1 hover:scale-110 transition-all duration-150 ') +
                        (theme == "dark" ? "bg-card-header" : "bg-white")
                    }
                        href='mailto:jpablo9988@gmail.com'
                        aria-label='Copies the website e-mail to your clipboard.'
                    >
                        <ScaleDiv
                            defaultLogo={msg}
                            className='sm:size-14 max-sm:size-12'
                            logoLabel='Pixel Art Logo of an envelope.'
                        ></ScaleDiv>

                    </a>
                    <a target="_blank" className='flex size-fit border-1 rounded-sm bg-white hover:scale-105 transition-all duration-150'
                        href='https://www.linkedin.com/in/dev-juan-amorocho/'
                        aria-label='Redirects to Juan Amorochos Linkedin in another tab'
                    >
                        <ScaleDiv
                            defaultLogo={linkedin}
                            defaultLogoDark={linkedin}
                            className='sm:size-14 max-sm:size-12'
                            logoLabel='Logo of LinkedIn in Pixel Art'
                        ></ScaleDiv>
                    </a>
                    <a target="_blank" className=
                        {('flex justify-center items-center rounded-sm relative border-1 hover:scale-105 transition-all duration-150 cursor-pointer ') +
                            (theme == "dark" ? "bg-card-header" : "bg-white")
                        }
                        href='https://jpxls.itch.io/'
                        aria-label='Redirects you to Juan Amorochos Itchio in another tab'
                    >
                        <ScaleDiv
                            defaultLogo={itchio}
                            defaultLogoDark={itchio}
                            className='sm:size-14 max-sm:size-12'
                            logoLabel='Icon of Itchio in Pixel Art'
                        ></ScaleDiv>
                    </a>
                    <a target="_blank" className=
                        {('flex justify-center items-center rounded-sm relative border-1 hover:scale-105 transition-all duration-150 ') +
                            (theme == "dark" ? "bg-card-header" : "bg-white")
                        }
                        href='https://github.com/jpablo9988'
                        aria-label='Redirects you to Juan Amorocho Github in another tab'
                    >
                        <ScaleDiv
                            defaultLogo={github}
                            className='sm:size-14 max-sm:size-12'
                            logoLabel='Icon of Github in Pixel Art'
                        ></ScaleDiv>
                    </a>
                </div>
                <div className='grid grid-flow-rows gap-y-2'> <h2><b>e-mail:</b></h2>
                    <div className='hover:underline'>
                        <a onClick={() => copyToClipboard("jpablo9988@gmail.com")} className=' cursor-pointer' aria-label='Copies the website e-mail to your clipboard.'> jpablo9988@gmail.com </a>
                    </div>
                </div>
            </AccordionCard>
        </div>
    )
}

export default ContactMe
