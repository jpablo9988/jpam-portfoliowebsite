import { motion } from 'motion/react';

export interface OutlintedScaleButtonProps {
    id?: string | number,
    scaleOnHover?: number
    scaleOnClick?: number
    className?: string
    textDescriptor?: string,
    fontClassName?: string
    onClickAction?: (e: React.MouseEvent) => void
}
export default function OutlinedScaleButton(props: OutlintedScaleButtonProps) {
    return (
        <motion.button
            key={props.id + 'outLinedButton'}
            whileHover={{ scale: props.scaleOnHover || 1.1 }}
            whileTap={{ scale: props.scaleOnClick || 0.95 }}
            onClick={props.onClickAction}
            className={'flex flex-initial bg-outline-button rounded-xl hover:bg-accent border-1 border-solid size-fit md:p-3 p-2'}
        >
            <p className={'font-semibold ' + props.fontClassName}>{props.textDescriptor}</p>
        </motion.button>
    )

}