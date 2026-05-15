import GlobalContext from "@/context/GlobalContext";
import { useContext } from "react";
import { motion } from 'motion/react';

export interface toggleButtonProps {
    key: string,
    toggleTracker: boolean
    src: string,
    spriteSize?: string
    textDescriptor?: string
    buttonLabel?: string,
    logoLabel?: string,
    onClickAction?: (e: React.MouseEvent) => void
    toggleMaskUrl?: string
    darkModeSprite?: string,
    srcOnToggle?: string,
    className?: string
}
export default function ToggleButton(props: toggleButtonProps) {
    const { theme } = useContext(GlobalContext);
    return (
        <motion.button className={"flex relative size-fit " + (props.className ? props.className + " " : " ")} onClick={props.onClickAction}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={props.buttonLabel}>
            <img className={("absolute size-full pointer-events-none " +
                " mask-cover -z-1 ") + (props.toggleTracker ? " " : "hidden ") + (theme === "dark" ? "bg-yellow-500" : "bg-blue-400")
            }
                style={{ mask: `url(${props.toggleMaskUrl}) `, maskSize: '1rem' }
                }
                aria-label="Mask for button."
            />
            <img className={('object-cover object-center transition delay-50 duration-150 ease-in-out ') +
                (props.spriteSize + ' ' || 'sm:size-14 max-sm:size-12 ') +
                (!props.darkModeSprite && (theme === 'dark') ? ' invert ' : ' ') +
                (props.toggleTracker ? " opacity-40 " : " ")
            }
                src={props.darkModeSprite && (theme === 'dark') ? props.darkModeSprite : props.src}
                alt={props.logoLabel}
            />
        </motion.button>
    )
}