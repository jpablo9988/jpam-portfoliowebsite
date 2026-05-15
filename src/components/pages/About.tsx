import '@/App.css'
import AboutIllustMS from '@/assets/me_logos/meAbout_200.png'
import AboutIllustL from '@/assets/me_logos/meAbout_270.png'
import Resume from '@/assets/2026_EngCV_JuanPabloAmorocho_Games(v2).pdf'
import ScaleButton from '../parts/buttons/ScaleButton'
import { useContext, useEffect } from 'react'
import GlobalContext from '@/context/GlobalContext'
import OutlinedScaleButton from '../parts/buttons/OutlinedScaleButton'
import { AccordionCard } from '../parts/AccordionCard'
import { HighlightSection } from '../parts/HighlightSection'
function About() {
    const { changeBackground } = useContext(GlobalContext)
    useEffect(() => {
        changeBackground(1)
        return () => {
            changeBackground(0);
        }
    }, []);
    const tools: string[] = ["Board Games", "Graphic Design", "Game Design", "Digital & Pixel Art", "Video Games", "Music Composition", "Piano & Guitar", "History", "Cooking"]
    const languages: string[] = ["🇪🇸 Spanish (Native)", "🇬🇧 English (C1-C2)", "🇫🇷 French (A2-B1)"]
    return (
        <div className='flex flex-1 flex-col h-full justify-center items-center my-5'>
            <AccordionCard title={"who am I?"} description='shows a summary of my person and my accomplishments'
                className='lg:w-160 size-fit min-w-1/2 max-md:mb-25'>
                <div className='flex flex-initial flex-col h-fit w-full gap-y-2 text-wrap sm:p-5 p-2 border-b'>
                    <div className='flex items-center justify-center'>
                        <ScaleButton
                            id={100}
                            key={100}
                            defaultLogo={AboutIllustL}
                            defaultLogoDark={AboutIllustL}
                            className='lg:size-68 max-lg:hidden'
                            scaleOnHover={1.05}
                            scaleOnClick={1.05}
                        />
                        <ScaleButton
                            id={101}
                            key={101}
                            defaultLogo={AboutIllustMS}
                            defaultLogoDark={AboutIllustMS}
                            className='max-lg:size-40 lg:hidden'
                            scaleOnHover={1.05}
                            scaleOnClick={1.05}
                        />
                    </div>
                    <h1 className='sm:font-bold font-normal'>
                        Hi, there! I'm Juan Pablo.
                    </h1>
                    <h2 className='font-semibold'>Games & Full-Stack Developer</h2>
                    <p className='text-muted-foreground'> © 2026 Juan Pablo Amorocho </p>
                </div>
                <div className='flex flex-initial flex-col h-fit w-full gap-y-4 text-wrap p-5'>
                    <div className='flex flex-row flex-wrap text-left gap-x-2'>
                        <p>
                            <b>You can find my resume here: </b>
                        </p>
                        <a href={Resume} target='_blank'> link to resume! 🔗</a>
                    </div>
                    <p className='text-left'>

                        Born in <b>Colombia</b> 🇨🇴 and based in <b>Toronto, Canada</b> 🇨🇦, I have over <b>8 years</b> of experience developing software and games in academic, personal, collaborative and professional settings.
                        I've adored videogames as an artform ever since I was a wee lad and my hope is to develop fun, meaningful apps and games to whoever uses them.
                        <br />
                        <br />
                        In my late teens, I decided to pursue my bachelors in 'Software Engineering' after a change in majors and much needed soul searching.
                        The art of creation that programming gives you is what I loved about it the most – creating new games, websites, <i>dog social media apps</i>, even if challenging, it was rewarding all the same.
                        <br />
                        <br />
                        After a tough five years (<i>yeah, the Covid Pandemic sucked</i>), I decided to continue my academic pursuit in Canada, recently graduating from a Games – Programming advanced diploma in December 2025.
                        Right now, my goal is to get more professional experience, develop cool, innovative programs and learn from more experienced programmers so I can improve at my craft (and also pay my bills, I'd love that as well!).
                        <br />
                        <br />
                        Hopefully this page can get you acquainted in who I am and what I do!
                    </p>
                    <div className='flex flex-initial sm:flex-row flex-col h-fit w-full'>
                        <div className='flex flex-col sm:w-1/2 w-fit h-fit p-2 gap-y-3'>
                            <h2 className='text-left font-semibold'> ❤︎ MY OTHER INTERESTS </h2>
                            <div className='p-2 flex flex-row flex-initial h-fit w-full flex-wrap gap-2' >
                                {tools.map((item, index) => (
                                    <OutlinedScaleButton
                                        id={index + 60}
                                        key={index + 60}
                                        textDescriptor={item}
                                        scaleOnClick={1.1}
                                        fontClassName='text-xs'
                                    />
                                ))}

                            </div>
                        </div>
                        <div className='flex flex-col sm:w-1/2 w-fit h-fit p-2 gap-y-3'>
                            <h2 className='text-left font-semibold'> ⛿ LANGUAGES </h2>
                            <div className='p-2 flex flex-row flex-initial h-fit w-full flex-wrap gap-2' >
                                {languages.map((item, index) => (
                                    <OutlinedScaleButton
                                        id={index + 600}
                                        key={index + 600}
                                        textDescriptor={item}
                                        scaleOnClick={1.1}
                                        fontClassName='text-xs' />
                                ))}
                            </div>
                        </div>

                    </div>
                    <h2 className='text-left font-semibold'> Professional Experience </h2>
                    <HighlightSection>
                        <p className='text-left font-semibold'> Student Developer - Co-op @ Centennial College's OER Lab</p>
                        <p className='text-left font-semibold italic'> (September 2024 - December 2024)</p>
                    </HighlightSection>
                    <HighlightSection>
                        <p className='text-left font-semibold'> Salad Days - Composer & Game Developer (On-Call)</p>
                        <p className='text-left font-semibold italic'> (April 2024)</p>
                    </HighlightSection>
                    <HighlightSection>

                        <p className='text-left font-semibold'> Unity - Intern @ Sagittaras Games</p>
                        <p className='text-left font-semibold italic'> (July 2023 - July 2024)</p>
                    </HighlightSection>
                    <h2 className='text-left font-semibold'> Education </h2>
                    <HighlightSection>
                        <p className='text-left font-semibold'> Game Programming - Centennial College</p>
                        <p className='text-left font-semibold italic'> (January 2024 - December 2025)</p>
                    </HighlightSection>
                    <HighlightSection>
                        <p className='text-left font-semibold'> Software Engineering - Pontificia Universidad Javeriana</p>
                        <p className='text-left font-semibold italic'> (January 2017 - December 2022)</p>
                    </HighlightSection>
                </div>
            </AccordionCard>

        </div>
    )
}

export default About
