import GlobalContext from '@/context/GlobalContext';
import { motion } from 'motion/react';
import { useContext, useState, type JSX } from 'react';
export interface ScaleDivProps {
    className?: string
    logoLabel?: string,
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
    id?: number,
    scaleOnHover?: number,
    scaleOnClick?: number,
    textDescriptor?: string,
}
export default function ScaleDiv(props: ScaleDivProps) {
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
    function renderDivVisuals(defLogo?: string, defLogoD?: string, hoverLogo?: string, hoverLogoDark?: string): JSX.Element {
        return (
            <><img
                className={
                    (isHovering(hoverLogo) ?
                        'hidden' :
                        'block') + (' object-cover object-center transition delay-50 duration-150 ease-in-out ' + (props.className || 'sm:size-14 max-sm:size-12 ')) +
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
                        (' object-cover object-center transition delay-50 duration-150 ease-in-out  ' + (props.className || 'sm:size-14 max-sm:size-12 ')) +
                        (theme === 'dark' ? (hoverLogoDark ? " " : " invert ") : " ")
                    }
                    src={theme === 'light' ? hoverLogo : (hoverLogoDark ? hoverLogoDark : hoverLogo)}
                    loading={(props.isEager ? 'eager' : 'lazy')}
                    alt={props.logoLabel}
                /></>
        )
    }
    return (
        <motion.div
            key={props.id}
            className='flex flex-col gap-y-1 size-fit  items-center'
            onHoverStart={() => {
                setHover(true)
            }}
            onHoverEnd={() => {
                setHover(false)
            }}
            whileHover={{ scale: props.scaleOnHover || 1.1 }}
            whileTap={{ scale: props.scaleOnClick || 0.95 }}
            tabIndex={-1}
            aria-label={"Animates the scale of the logo when hovered or selected."}>
            {
                !isToggled() ?
                    renderDivVisuals(props.defaultLogo, props.defaultLogoDark,
                        props.onHoverLogo, props.onHoverLogoDark)
                    : renderDivVisuals(props.onToggleLogo, props.onToggleLogoDark, props.onHoverToggleLogo,
                        props.onHoverToggleLogoDark)
            }
            <p className={(props.textDescriptor != undefined) ? 'block' : 'hidden'}>
                {props.textDescriptor}
            </p>
        </motion.div>
    )
}