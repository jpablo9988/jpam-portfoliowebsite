import { AccordionCard } from "../parts/AccordionCard";
import { HighlightSection } from "../parts/HighlightSection";
import OutlinedScaleButton from "../parts/buttons/OutlinedScaleButton";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";

export default function RGWSPWA() {
    const { projects } = useContext(GlobalContext)
    const { id } = useParams();
    const project = projects.oneProject((id && !Number.isNaN(parseInt(id))) ? parseInt(id) : 0);
    return (<div
        className='flex flex-1 flex-col h-full justify-center items-center p-3 md:mb-25'
    >
        <AccordionCard title="Project - Case Study">
            <h1> <b><i>Making of:</i></b> RGWS-PWA - Exercise Module for <b>Pepper</b>, a Robotic Assistant for Dementia Patients. </h1>
            <HighlightSection>
                <div className="grid grid-cols-2 size-full">
                    <div className="grid grid-rows-3 items-start justify-center max-sm:pr-4">
                        <h2> Details </h2>
                        <div className="flex size-full items-start"><p>Project :<span className="opacity-50"> Thesis Project </span> </p><br /></div>
                        <div className="flex size-full items-start"><p>Type :<span className="opacity-50"> Full-Stack Network + Robotics </span><br /></p></div>
                        <div className="flex size-full justify-start"><p>Timeline : <span className="opacity-50"> June 2021 - December 2022 </span>
                        </p></div>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center">
                        <h2 className="pb-4"> My Role{(project.roles && project.roles?.length >= 1) ? "s" : ""} </h2>
                        <div className="grid grid-rows-2 justify-center items-center grid-flow-col w-full gap-2">
                            {(project.roles) ? project.roles.map((item, index) => (
                                <div className="z-11" key={"rgwsBlogWrapper" + index}>
                                    <OutlinedScaleButton
                                        id={"rgwsBlogScaleButton-insides" + index}
                                        key={"rgwsBlogScaleButton" + index}
                                        textDescriptor={item}
                                        fontClassName="text-xs max-sm:text-2xs"
                                        scaleOnClick={1.1} />
                                </div>)) : (<p> No roles found. </p>)}
                        </div>
                    </div>
                </div>
            </HighlightSection>
            <div className="px-5">
                <h2> Under construction! </h2>
            </div>
        </AccordionCard>
    </div >)
}