import Surfing from '@/assets/album_imgs/WebSurfingSleeve.png'
import SurfingTN from '@/assets/thumbnails/WebSurfingSleeve_Thumbnail.png'
import Dorian from '@/assets/project_thumbnails/DorianInMajriti_2.png'
import DorianThumbnail from '@/assets/thumbnails/DorianInMajriti-Thumbnail.png'
import LilRabbs from '@/assets/project_thumbnails/LilRabbs.png'
import LilRabbsThumbnail from '@/assets/thumbnails/Rabs-Thumbnail.png'
import DeltaruneVillains from '@/assets/project_thumbnails/YTCompDTDarknersBigger.png'
import DeltaruneVillainsTN from '@/assets/thumbnails/Darkners1-2-thumb.png'

import PracticeLink from '@/assets/project_thumbnails/Lonk2.png'
import PracticeLinkTN from '@/assets/thumbnails/LinkBOTW_thumn.png'

import Tenna from '@/assets/pixel_imgs/Tenna_DISCO_PixelArt_Page.png'
import Earth from '@/assets/pixel_imgs/Earth_Skybox-export.png'
import BlackHole from '@/assets/pixel_imgs/BlackHolePanoramic.png'
import Pulsar from '@/assets/pixel_imgs/spacetry2.png'
import PinkClouds from '@/assets/pixel_imgs/PinkClouds.png'
import RNGesus from '@/assets/pixel_imgs/RNGFULL.png'





export type ArtProjectItem = {
    alt: string,
    source: string,
    thumbnail?: string,
}
export const GetPixelArtProjects = (): ArtProjectItem[] => {
    const artList: ArtProjectItem[] = [
        {
            alt: "A pixel art piece of Tenna, the Deltarune character, hitting a dancing pose with a rainbow and pink backdrop.",
            source: Tenna,
        },
        {
            alt: "A pixel-art panorama of space and the earth's surface in night-time. The surface shows a small glimpse of continents and cities. ",
            source: Earth,
        },
        {
            alt: "A pixel-art mockup of a title screen for a game called RNGesus. Shows a representation of RNGesus, a heavenly figure with a dice head and souls coming up to heaven.",
            source: RNGesus,
        },

        {
            alt: "A pixel-art landscape of the solar system with a black-hole where the sun should be.",
            source: BlackHole,
        },
        {
            alt: "A colorful pixel-art landscape of a blue pulsar in the horizon and nebulas surrounding it. ",
            source: Pulsar,
        },
        {
            alt: "A pixel-art landscape of a rural setting with a pink sky and a mysterious figure in the horizon.",
            source: PinkClouds,
        },

    ]
    return artList;
}
export const GetArtProjects = (): ArtProjectItem[] => {
    const artList: ArtProjectItem[] = [
        {
            alt: "A landscape of a blue sky and planetoids. Two figures are centered - a blue giant attempting to touch the helmet of a small astronaut. ",
            source: Dorian,
            thumbnail: DorianThumbnail
        },
        {
            alt: "A sectioned image of most of the villains in Deltarune Chapter 1 and 2, each with backgrounds that represents their areas in-game. ",
            source: DeltaruneVillains,
            thumbnail: DeltaruneVillainsTN
        },
        {
            alt: "A humanoid rabbit wearing work clothes and holding a leather bag and a sheathed axe.",
            source: LilRabbs,
            thumbnail: LilRabbsThumbnail
        },
        {
            alt: "A colored sketch of Link from The Legend of Zelda: Breath of the Wild in garments found in-game.",
            source: PracticeLink,
            thumbnail: PracticeLinkTN
        },
        {
            alt: "An album sleeve that contains a humanoid sun surfing out of a computer screen. ",
            source: Surfing,
            thumbnail: SurfingTN
        },
    ]
    return artList;
}