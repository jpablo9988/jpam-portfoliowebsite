import AboutLogo from "@/assets/about_logos/AboutLogo.svg"
import ContactLogo from "@/assets/contact_logos/ContactSprite.svg"
import ContactLogoHover from "@/assets/contact_logos/ContactSprite_hover.svg"
import ContactLogoDark from "@/assets/contact_logos/ContactSpriteD.svg"
import ContactLogoDarkHover from "@/assets/contact_logos/ContactSpriteD_hover.svg"
import HomeLogo from "@/assets/home_logos/HomeLogo.svg"
import PortfolioLogo from "@/assets/projects_logos/ProjectsLogo.svg"
import PortfolioLogoHover from "@/assets/projects_logos/ProjectsLogo_hover.svg"
import ArtLogoLightMode from "@/assets/art_logos/ArtLogoLightMode.svg"
import ArtLogoDarkMode from "@/assets/art_logos/ArtLogoDarkMode.svg"
import MusicLogoLightMode from "@/assets/music_logos/MusicLogoLightMode.svg"
import ProgrammingLogoLightMode from "@/assets/programming_logos/ProgrammingLogoLightMode.svg"
import ProgrammingLogoLightModeHover from "@/assets/programming_logos/ProgrammingLogoLightMode_onHover.svg"
import ScaleButton from './buttons/ScaleButton';
import { useNavigate } from "react-router-dom"
import ButtonType, { type ButtonParameters } from "./buttons/ButtonType"
import ScaleDiv from "./buttons/ScaleDiv"
//import { useImageCache } from "@/hooks/useImageCache"


export default function MainSideNav() {
    const menuItems: ButtonParameters[] = [
        {
            title: 'home',
            type: 'scale',
            lightLogo: HomeLogo,
            route: '/',
            buttonLabel: 'Navigates you to the home screen. ',
            logoLabel: 'A logo of a pixel art house. '
        },

        {
            title: 'about',
            type: 'scale',
            lightLogo: AboutLogo,
            route: '/about',
            buttonLabel: 'Navigates you to the about section. ',
            logoLabel: 'A logo of an information bubble with an i in the center. '
        },
        {
            title: 'portfolio',
            type: 'dropdown',
            lightLogo: PortfolioLogo,
            lightLogoOnHover: PortfolioLogoHover,
            buttonLabel: 'Opens a dropdown with all the sections of the portfolio. ',
            logoLabel: 'A logo of a computer folder in pixel art. ',
            children:
                [
                    {
                        title: 'dev',
                        type: 'scale',
                        lightLogo: ProgrammingLogoLightMode,
                        lightLogoOnHover: ProgrammingLogoLightModeHover,
                        route: '/projects/dev',
                        buttonLabel: 'Navigates you to the programming section of the portfolio. ',
                        logoLabel: 'A logo of two html opening brackets. '
                    },
                    {
                        title: 'art',
                        type: 'scale',
                        lightLogo: ArtLogoLightMode,
                        darkLogo: ArtLogoDarkMode,
                        route: '/projects/art',
                        buttonLabel: 'Navigates you to the art section of the portfolio. ',
                        logoLabel: 'A logo of a pixel art pencil. '
                    },
                    {
                        title: 'music',
                        type: 'scale',
                        lightLogo: MusicLogoLightMode,
                        route: '/projects/music',
                        buttonLabel: 'Navigates you to the music section of the portfolio. ',
                        logoLabel: 'A logo of a pixel art half note in musical notation. '
                    }
                ]

        },
        {
            title: 'contact me!',
            type: 'scale',
            lightLogo: ContactLogo,
            lightLogoOnHover: ContactLogoHover,
            darkLogo: ContactLogoDark,
            darkLogoOnHover: ContactLogoDarkHover,
            route: '/contact_me',
            buttonLabel: 'Navigates you to the about section of the portfolio. ',
            logoLabel: 'Logo of a cellphone. '
        }
    ]


    const navigate = useNavigate();
    const handleNavigation = (route: string | undefined) => {
        if (route)
            navigate(route);
    }
    return (
        <div className="flex flex-col mr-4 gap-y-3 justify-center items-center">
            {menuItems.map((item, index) => (
                <ButtonType buttonType={item.type} key={index} navigationHandlerDropdown={handleNavigation}
                    dropdownContent={item.children} dropdownLabel={item.buttonLabel}>
                    {(item.type == "dropdown") ? (
                        <ScaleDiv
                            id={index}
                            defaultLogo={item.lightLogo}
                            defaultLogoDark={item.darkLogo ? item.darkLogo : undefined}
                            onHoverLogo={item.lightLogoOnHover}
                            onHoverLogoDark={item.darkLogoOnHover ? item.darkLogoOnHover : undefined}
                            textDescriptor={item.title}
                            key={'main-sidenav-' + item.title}
                            isEager={true}
                            logoLabel={item.logoLabel}
                        />) :

                        <ScaleButton
                            id={index}
                            defaultLogo={item.lightLogo}
                            defaultLogoDark={item.darkLogo ? item.darkLogo : undefined}
                            onHoverLogo={item.lightLogoOnHover}
                            onHoverLogoDark={item.darkLogoOnHover ? item.darkLogoOnHover : undefined}
                            textDescriptor={item.title}
                            key={'main-sidenav-' + item.title}
                            onClickAction={() => { handleNavigation(item.route) }}
                            isEager={true}
                            buttonLabel={item.buttonLabel}
                            logoLabel={item.logoLabel}
                        />
                    }
                </ButtonType>
            ))
            }
        </div >
    );
}