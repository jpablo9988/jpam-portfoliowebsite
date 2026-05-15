type HighlightSectionProps =
    {
        children?: React.ReactNode

    }
export const HighlightSection = (props: HighlightSectionProps) => {
    return (
        <div className='flex relative flex-initial flex-col h-fit w-full border-l-8 bg-exp-item py-6 px-12'>
            <a className='absolute w-full h-full top-0 left-0 bg-exp-item-hover opacity-0 z-10 transition-opacity duration-300 hover:opacity-100' />
            {props.children}
        </div>
    )
}