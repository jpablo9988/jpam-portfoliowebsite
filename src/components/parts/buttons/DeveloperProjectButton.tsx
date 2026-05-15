
import type { Project } from "@/data/Projects";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";


const DeveloperProjectButton = (props: Project) => {
    const [isHover, setIsHovering] = useState(false);
    const navigate = useNavigate();
    const handleNavigation = (route: string | undefined) => {

        if (route) {
            if (!props.isHighlight) {
                window.open(route, '_blank', 'noopener,noreferrer');
                return;
            }
            navigate(route);
        }
    }
    const toggleHover = () => {
        setIsHovering(prev => !prev);
    }

    return (

        <motion.button className={("project_button ") + (props.isHighlight ? "h-85 " : "h-65 ") + ("items-center bg-card-header")} onClick={() => handleNavigation(props.detailsPage)} whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={toggleHover}
            onHoverEnd={toggleHover}
            key={props.title + "motionButton"}
            aria-label={"Opens more information on the " + props.title + " project. "}>
            <div className="relative flex flex-initial mb-4 max-md:mt-4">
                <img className={("object-cover ") + ((props.isHighlight) ? "w-90 h-45 max-md:w-60 max-md:h-30 min-w-30" : "w-60 h-30 max-md:h-25 max-md:w-50 min-w-50") + (" drop-shadow-md drop-shadow-black")}
                    src={props.thumbnail}
                    alt={"A thumbnail representing the " + props.title + " project."}></img>
                <div className={("flex size-full absolute top-0 left-0") + (isHover ? " enter-frame " : " exit-frame ")}>
                    <svg width="100% " height="100% " viewBox="0 0 200 100"
                        aria-label="A skewed rectangle that serves as a backdrop to the instruction text. ">
                        <polygon points="
                        0,0
                        0,100
                        200,100
                        150,0
                    "
                            fill="var(--card-foreground)"
                            fillOpacity={"70%"}>

                        </polygon>
                    </svg>
                    <div className="flex size-full absolute top-0 left-0 items-center justify-center">
                        <p className={("text-background italic") + (props.isHighlight ? " text-xl max-md:text-lg" : "text-xl max-md:text-lg")}><b>{(props.isHighlight) ? "Read more about it!" : (props.detailsPage) ? "Go to Project!" : "No Link Available"}</b></p>
                    </div>
                </div>
            </div>
            <div className={("flex flex-col flex-initial ") + (props.isHighlight ? "h-max w-80 max-md:w-45 min-w-30 " : "h-fit w-50 max-md:w-40 ") + ("text-wrap mb-4 mx-4")}>
                <h2 className="text-left my-2"><b>{props.title}</b></h2>
                {(props.isHighlight) ? <p className="text-left text-wrap ml-4 justify-evenly">{props.abstract}</p> : ""}
                <p className={("text-left text-wrap justify-evenly text-muted-foreground mt-2 italic ") + ((props.isHighlight) ? "" : " text-sm max-md:text-xs")}>{props.madeFor}</p>
            </div>
        </motion.button>
    )
}
export { DeveloperProjectButton };