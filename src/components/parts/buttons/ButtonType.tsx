
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import ScaleButton from "./ScaleButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import ScaleDiv from "./ScaleDiv";


export type buttonTypes = 'outlined' | 'scale' | 'dropdown';

export type ButtonParameters =
    {
        title: string,
        type: buttonTypes
        description?: string | undefined
        lightLogo: string,
        lightLogoOnHover?: string | undefined,
        darkLogo?: string,
        darkLogoOnHover?: string | undefined,
        route?: string,
        children?: ButtonParameters[],
        buttonLabel?: string,
        logoLabel?: string
    }
export interface ButtonTypeProps {
    children?: React.ReactNode,
    buttonType: buttonTypes
    dropdownContent?: ButtonParameters[],
    dropdownLabel?: string,
    navigationHandlerDropdown?(route: string | undefined): void
}

export default function ButtonType(props: ButtonTypeProps) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [accordionOpen, setAccordionOpen] = useState('1')
    const parseButtonType = (type: buttonTypes) => {
        switch (type) {
            case 'scale':
                return (
                    props.children
                )
            case 'dropdown':
                return (
                    <>
                        <div
                            className="max-sm:hidden">
                            <DropdownMenu
                                open={dropdownOpen}
                                onOpenChange={setDropdownOpen}
                                modal={false}
                                dir={"ltr"}
                            >
                                <DropdownMenuTrigger asChild>
                                    <button onClick={() => {
                                        setDropdownOpen
                                            (true);
                                    }
                                    }
                                        aria-label={props.dropdownLabel}>
                                        {
                                            props.children
                                        }
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="flex flex-wrap size-fit items-center justify-center" side='right' align='center' sideOffset={20}>
                                    <DropdownMenuGroup>
                                        {
                                            props.dropdownContent?.map((item, index) => (
                                                <DropdownMenuItem aria-label={item.buttonLabel} key={'dropdownWrapper' + item.title} onClick={() => { props.navigationHandlerDropdown?.(item.route) }}>
                                                    <ScaleDiv
                                                        key={'dropdown-' + item.title}
                                                        id={index + 2000}
                                                        defaultLogo={item.lightLogo}
                                                        defaultLogoDark={item.darkLogo}
                                                        onHoverLogo={item.lightLogoOnHover}
                                                        onHoverLogoDark={item.darkLogoOnHover}
                                                        textDescriptor={item.title}
                                                        logoLabel={item.logoLabel}
                                                    />
                                                </DropdownMenuItem>
                                            ))
                                        }
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
                        <div className="sm:hidden">
                            <Accordion
                                type='single'
                                collapsible
                                className="flex flex-wrap justify-center min-h-11"
                                defaultValue="none"
                                value={accordionOpen}
                                onValueChange={setAccordionOpen}>
                                <AccordionItem key={2500} value={"projects"}>
                                    <AccordionTrigger className="py-4" asChild>
                                        <div onTouchStart={() => {
                                            if (accordionOpen == 'none')
                                                setAccordionOpen('projects')
                                            else
                                                setAccordionOpen('none')
                                        }}>
                                            {props.children}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul>
                                            {
                                                props.dropdownContent?.map((item, index) => (
                                                    <li key={'dropdownAccordion-item-' + item.title}>
                                                        <ScaleButton
                                                            key={'dropdown-acc' + item.title}
                                                            id={index + 2500}
                                                            defaultLogo={item.lightLogo}
                                                            defaultLogoDark={item.darkLogo}
                                                            onHoverLogo={item.lightLogoOnHover}
                                                            onHoverLogoDark={item.darkLogoOnHover}
                                                            textDescriptor={item.title}
                                                            onClickAction={() => { props.navigationHandlerDropdown?.(item.route) }}
                                                        />
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </>
                )
        }
    }
    return (
        <>
            {parseButtonType(props.buttonType)}
        </>
    )
}