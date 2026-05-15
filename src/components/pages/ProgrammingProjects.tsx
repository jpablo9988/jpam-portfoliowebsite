import '@/App.css'
import { DeveloperProjectButton } from '../parts/buttons/DeveloperProjectButton'
import { AccordionCard } from '../parts/AccordionCard'
import { useContext } from 'react'
import GlobalContext from '@/context/GlobalContext'

function ProgrammingProjects() {
    const { projects } = useContext(GlobalContext)


    return (
        <div className='flex flex-1 flex-col h-full justify-center items-center py-4'>
            <AccordionCard title='game dev projects!'>
                <div className='flex flex-row gap-4 mx-4 flex-wrap justify-center items-center'>
                    {
                        projects.allProjects.map((item, index) =>
                            (item.category == "Game") ?
                                <DeveloperProjectButton
                                    key={item.title + "devProjectButton" + item.category + index}
                                    {...item}
                                ></DeveloperProjectButton> : ""

                        )
                    }
                </div>

            </AccordionCard>
            <AccordionCard title='full stack projects!' className='xl:w-250 size-fit max-md:mb-25'>
                <div className='flex flex-row gap-4 mx-4 flex-wrap justify-center items-center'>

                    {
                        projects.allProjects.map((item, index) => (
                            (item.category == "FullStack") ?
                                <DeveloperProjectButton
                                    key={item.title + "devProjectButton" + item.category + index}
                                    {...item}
                                ></DeveloperProjectButton> : ""
                        )
                        )

                    }
                </div>
            </AccordionCard>

        </div>
    )
}

export default ProgrammingProjects
