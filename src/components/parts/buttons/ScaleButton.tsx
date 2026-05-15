import GlobalContext from '@/context/GlobalContext';
import { motion } from 'motion/react';
import { useContext, useState, type JSX } from 'react';
import type { OutlintedScaleButtonProps } from './OutlinedScaleButton';
// IMPLEMENT THIS AS COLOR MASK: mask-[url(@/assets/music_logos/RandomizeLogoLight.svg)] bg-amber-500 mask-cover 
export interface ScaleButtonProps extends OutlintedScaleButtonProps {
    className?: string
    buttonLabel?: string,
    logoLabel?: string,
    hoverLabel?: string,
    toggleCondition?: boolean,
    defaultLogo?: string,
    defaultLogoDark?: string,
    onHoverLogo?: string,
    onHoverLogoDark?: string,
    onToggleLogo?: string,
    onToggleLogoDark?: string,
    onHoverToggleLogo?: string,
    onHoverToggleLogoDark?: string,
    isEager?: boolean,
    onHoverAction?: (hovering: boolean) => void
}
export default function ScaleButton(props: ScaleButtonProps) {
    const { theme } = useContext(GlobalContext);
    const [hover, setHover] = useState(false);

    function isHovering(hoverLogoSpecifier?: string): boolean {
        if (hover && hoverLogoSpecifier)
            return true;
        return false;
    }
    function isToggled(): boolean {
        return props.toggleCondition || false;
    }
    function renderButtonVisuals(defLogo?: string, defLogoD?: string, hoverLogo?: string, hoverLogoDark?: string): JSX.Element {
        return (
            <><img
                className={
                    (isHovering(hoverLogo) ?
                        'hidden' :
                        'block') + (' object-cover object-center transition delay-50 duration-150 ease-in-out ' + (props.className || 'md:size-14 max-md:size-12 ')) +
                    (theme === 'dark' ? (defLogoD ? " " : " invert ") : " ")
                }
                src={theme === 'light' ? defLogo : (defLogoD ? defLogoD : defLogo)}
                loading='lazy'
                alt={props.logoLabel}
            />
                <img
                    className={(isHovering(hoverLogo) ?
                        'block ' :
                        'hidden ') +
                        (' object-cover object-center transition delay-50 duration-150 ease-in-out  ' + (props.className || 'mc:size-14 max-md:size-12 ')) +
                        (theme === 'dark' ? (hoverLogoDark ? " " : " invert ") : " ")
                    }
                    src={theme === 'light' ? hoverLogo : (hoverLogoDark ? hoverLogoDark : hoverLogo)}
                    loading={(props.isEager ? 'eager' : 'lazy')}
                    alt={props.hoverLabel}
                /></>
        )
    }
    return (
        <motion.button
            key={props.id}
            className='flex flex-col gap-y-1 size-fit items-center'
            aria-label={props.buttonLabel}
            onMouseEnter={() => props.onHoverAction?.(true)
            }
            onHoverStart={() => {
                setHover(true)
            }}
            onHoverEnd={() => {
                setHover(false)
            }}
            tabIndex={0}
            whileHover={{ scale: props.scaleOnHover || 1.1 }}
            whileTap={{ scale: props.scaleOnClick || 0.95 }}
            onFocus={() => setHover(true)}
            onClick={props.onClickAction}>

            {
                !isToggled() ?
                    renderButtonVisuals(props.defaultLogo, props.defaultLogoDark,
                        props.onHoverLogo, props.onHoverLogoDark)
                    : renderButtonVisuals(props.onToggleLogo, props.onToggleLogoDark, props.onHoverToggleLogo,
                        props.onHoverToggleLogoDark)
            }
            <p className={(props.textDescriptor != undefined) ? 'block' : 'hidden'}>
                {props.textDescriptor}
            </p>
        </motion.button>
    )
}