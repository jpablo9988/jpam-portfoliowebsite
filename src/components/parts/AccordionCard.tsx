import { useContext, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import GlobalContext from "@/context/GlobalContext"
import { motion } from "motion/react"
import DotsTexture_Dark from "@/assets/textures/DotsTexture_General.png"

type AccordionCardProps = {
    title: string,
    description?: string,
    logoSrc?: string,
    darkLogoSrc?: string,
    children?: React.ReactNode
    className?: string
    logoClassName?: string
    logoLabel?: string
}

export const AccordionCard = (props: AccordionCardProps) => {
    const [accordionTrigger, setAccordionTrigger] = useState('open')
    const { theme } = useContext(GlobalContext);
    return (<Accordion
        type='single'
        collapsible
        value={accordionTrigger}
        aria-description={props.description}
        onValueChange={setAccordionTrigger}
        defaultValue="open"
        className={(props.className ||
            'xl:w-250 w-fit min-w-1/2')}>
        <AccordionItem key={5500} value={"open"}>
            <AccordionTrigger aria-label={"Extends or Retracts the " + props.title + " accordion section."}>
                <div className={('relative text-card-foreground flex flex-col flex-initial gap-6 px-6 h-15 w-full justify-center items-center border pb-0 ') + (accordionTrigger == 'open' ? 'sm:rounded-t-xl' : 'sm:rounded-xl')}>
                    <div className="absolute top-0 left-0 size-full bg-linear-to-r from-50% from-transparent to-90% to-(--background) -z-5 rounded-t-xl"></div>
                    <div className="absolute top-0 left-0 size-full bg-size-[auto_21px] opacity-10 -z-10 rounded-t-xl" style={{ backgroundImage: `url(${DotsTexture_Dark})` }}></div>
                    <div className="absolute top-0 left-0 size-full bg-card-header -z-11 rounded-t-xl"></div>
                    <div className={'flex flex-row items-center w-full'}>
                        <motion.img src={props.logoSrc} className={(props.logoClassName ? props.logoClassName + " " : " scale-90 -ml-6 ") + (" transition delay-50 duration-150 ease-in-out ") + ((props.logoSrc && theme === 'light') ? "visible" : (props.darkLogoSrc ? " hidden " : " invert "))} whileHover={{ scale: 1.1 }} aria-label={props.logoLabel}></motion.img>
                        <motion.img src={props.darkLogoSrc} className={("scale-90 -ml-6 ") + ((props.darkLogoSrc && theme === 'dark') ? "visible" : "hidden")} whileHover={{ scale: 1.1 }} aria-label={props.logoLabel}></motion.img>
                        <p className={('text-left font-semibold w-3/4 ') + (props.logoSrc ? 'ml-2.5 ' : 'ml-5 ')}>{props.title}</p>
                        <p className='text-right w-1/4'>{accordionTrigger == 'open' ? '-' : '+'}</p>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className='text-card-foreground flex flex-col flex-initial gap-6 p-6 w-full bg-card rounded-b-xl justify-center items-center border-l border-r border-b'>
                    {props.children}
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>)
}