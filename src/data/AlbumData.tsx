import CoolEvening from '@/assets/music/website/CoolEvening.ogg'
import Parsecs from '@/assets/music/website/ParsecsApart.ogg'
import GrindingGold from '@/assets/music/website/GrindingStrayGold.ogg'
import Waiting from '@/assets/music/website/In Wait.ogg'
import WalkingClouds from '@/assets/music/website/WalkingClouds.ogg'
import WebSurfingImage from '@/assets/album_imgs/WebSurfingSleeveTH.png'
// --- HR
import MainMenu from '@/assets/music/harmonicrhythm/MainMenu-HarmonicScale.ogg'
import Tutorial from '@/assets/music/harmonicrhythm/ItsTutorialTime.ogg'
import InteractiveTutorial from '@/assets/music/harmonicrhythm/TutorialTraining(Dynamic).ogg'
import Results from '@/assets/music/harmonicrhythm/Another.ogg'
import AllJingles from '@/assets/music/harmonicrhythm/AllJingles.ogg'
// ---SA
import Prelude from '@/assets/music/spaceadventure/MainMenu.ogg'
import Main from '@/assets/music/spaceadventure/MainTheme.ogg'
import TutorialSpace from '@/assets/music/spaceadventure/Attention.ogg'
import Majriti from '@/assets/music/spaceadventure/CalmMajriti.ogg'
import BattleMajriti from '@/assets/music/spaceadventure/BattleMajritiDay.ogg'
import Floating from '@/assets/music/spaceadventure/Floating.ogg'
import Graveyard from '@/assets/music/spaceadventure/Metallic_Graveyard(Stage_1).ogg'
import Wandering from '@/assets/music/spaceadventure/Wandering.ogg'
// ---Mys
import MysteriumSleeve from '@/assets/album_imgs/MysteriumSleves.png'
import MidnightExpress from '@/assets/music/mysterium/MidnightExpress.ogg'
import LadyInBlack from '@/assets/music/mysterium/LadyInBlack.ogg'
import ABitOfFun from '@/assets/music/mysterium/ABitOfFun.ogg'
import MorningExpress from '@/assets/music/mysterium/MorningExpress.ogg'
import PlotThickens from '@/assets/music/mysterium/ThePlotThickens.ogg'
import FindTheTruth from '@/assets/music/mysterium/FindingTheTruth.ogg'
import Culprit from '@/assets/music/mysterium/Culprit.ogg'
// ---Deltarune
import DeltaruneSleve from '@/assets/album_imgs/DeltaruneSleves.png'
import Chapter12Medley from '@/assets/music/deltarune/Chapter12Medley.ogg'
import DiscoTenna from '@/assets/music/deltarune/Tenna(Disco).ogg'
import TennaPreTenna from '@/assets/music/deltarune/Tennittus.ogg'


import HarmonicRhythmImage from '@/assets/album_imgs/HarmonicAlbumSleves.png'
import SpaceAdventureImage from '@/assets/album_imgs/SpaceAdventureSleves.png'

import { Howl } from 'howler';
export type Track = {
    title: string,
    alt: string,
    duration: string,
    src: Howl
}
export type Album = {
    title: string,
    alt: string,
    imageUrl: string,
    tracks: Track[]
}
export class Albums {
    private _albumList: Album[];
    constructor() {
        this._albumList = [
            {
                title: 'Site Surfing',
                alt: 'A collection of refreshing tunes made or adapted for this website as you peruse its contents. Have you tried clicking the image on home?',
                imageUrl: WebSurfingImage,
                tracks: [
                    {
                        title: 'Cool Evenings',
                        alt: 'A short piano piece that evokes cool evenings and refreshing beverages.',
                        duration: '1:27',
                        src: new Howl({
                            src: CoolEvening,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Parsecs Apart',
                        alt: 'A slow, spacious track made with guitar and synths.',
                        duration: '1:36',
                        src: new Howl({
                            src: Parsecs,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Grinding Stray Gold',
                        alt: 'An ethereal ballad rock track with an oboe melody. When you\'re in the zone hard at work.',
                        duration: '2:03',
                        src: new Howl({
                            src: GrindingGold,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'In Wait',
                        alt: 'A curious track that\'s a bit expecting. Waiting for something to happen',
                        duration: '1:27',
                        src: new Howl({
                            src: Waiting,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Walking Clouds ',
                        alt: 'A dreamy, electronic cloud that represents a day dream.',
                        duration: '1:52',
                        src: new Howl({
                            src: WalkingClouds,
                            autoplay: false,
                            loop: false
                        })
                    },
                ]
            },
            {
                title: 'A Space Adventure',
                alt: 'A collection of tracks that evoke space, adventures, and space adventures. ',
                imageUrl: SpaceAdventureImage,
                tracks: [
                    {
                        title: 'Astral Prelude',
                        duration: '1:32',
                        alt: 'Prelude to the adventure.',
                        src: new Howl({
                            src: Prelude,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Call to Adventure (in Space)',
                        duration: '2:23',
                        alt: 'Main theme of this album: It\'s slow, methodical and calls to adventure.',
                        src: new Howl({
                            src: Main,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Bit-crushed Training',
                        duration: '1:06',
                        alt: 'A training theme that uses square and bit-crushed instruments.',
                        src: new Howl({
                            src: TutorialSpace,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Groovy Majritian Winds',
                        duration: '3:12',
                        alt: 'A theme that evokes the exploration of a gas giant.',
                        src: new Howl({
                            src: Majriti,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Battle in Majriti',
                        duration: '1:23',
                        alt: 'A light-hearted battle theme in SPACE.',
                        src: new Howl({
                            src: BattleMajriti,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Satellite Graveyard',
                        duration: '2:46',
                        alt: 'A track that evokes the exploration of satellite graveyards. ',
                        src: new Howl({
                            src: Graveyard,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Dancing Stars',
                        duration: '1:20',
                        alt: 'A track that evokes the movement of two locked stars. ',
                        src: new Howl({
                            src: Wandering,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Floating on Milk and Coffee',
                        duration: '0:53',
                        alt: 'A track that evokes floating in space. ',
                        src: new Howl({
                            src: Floating,
                            autoplay: false,
                            loop: false
                        })
                    }
                ]
            }
            ,
            {
                title: 'Harmonic Rhythm',
                alt: 'A collection of tracks that I made for the game Harmonic Rhythm. Includes the menus and tutorial tracks. ',
                imageUrl: HarmonicRhythmImage,
                tracks: [
                    {
                        title: 'Main Menu ',
                        duration: '1:37',
                        alt: 'A funky track that quotes the rhythm tracks from the game.',
                        src: new Howl({
                            src: MainMenu,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Tutorial Track ',
                        duration: '0:53',
                        alt: 'A tutorial track that plays when you\'re talking to a mentor.',
                        src: new Howl({
                            src: Tutorial,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Results Track',
                        duration: '0:40',
                        alt: 'A track that plays when displaying your results of a level.',
                        src: new Howl({
                            src: Results,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Tutorial Training (Dynamic)',
                        duration: '0:48',
                        alt: 'A tutorial track that plays when you\'re practicing patterns.',
                        src: new Howl({
                            src: InteractiveTutorial,
                            autoplay: false,
                            loop: false
                        })
                    },

                    {
                        title: 'All Result Jingles',
                        duration: '0:16',
                        alt: 'All jingles in order from excelent, good, mediocre and fail.',
                        src: new Howl({
                            src: AllJingles,
                            autoplay: false,
                            loop: false
                        })
                    }
                ]
            },
            {
                title: 'Mysterium',
                alt: 'A collection of misc. tracks I did between 2019 and 2021 for a cancelled detective/noir project. ',
                imageUrl: MysteriumSleeve,
                tracks: [
                    {
                        title: 'The Midnight Express ',
                        duration: '1:35',
                        alt: 'A track that evokes being staying awake at midnight in a train.',
                        src: new Howl({
                            src: MidnightExpress,
                            autoplay: false,
                            loop: false

                        })
                    },
                    {
                        title: 'A Lady In Black',
                        duration: '2:04',
                        alt: 'A track that represents the character theme of a mysterious subject.',
                        src: new Howl({
                            src: LadyInBlack,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'Searching for Truth',
                        duration: '2:19',
                        alt: 'A track that evokes a tense investigation for the truth.',
                        src: new Howl({
                            src: FindTheTruth,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'A Bit Of Fun',
                        duration: '1:02',
                        alt: 'A track that evokes a bit of tomfoolery in the middle of an investigation with some tense elements.',
                        src: new Howl({
                            src: ABitOfFun,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'The Morning Express',
                        duration: '1:21',
                        alt: 'A parallel track to \' The midnight express \' that evokes the morning.',
                        src: new Howl({
                            src: MorningExpress,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'The Plot Thickens',
                        duration: '2:18',
                        alt: 'A track that evokes the final push to finding the truth in a mystery.',
                        src: new Howl({
                            src: PlotThickens,
                            autoplay: false,
                            loop: false
                        })
                    },
                    {
                        title: 'The Culprit',
                        duration: '1:35',
                        alt: 'A character track for a culprit.',
                        src: new Howl({
                            src: Culprit,
                            autoplay: false,
                            loop: false
                        })
                    }
                ]
            },
            {
                title: 'Deltarune Fan Tracks',
                alt: 'A collection of covers and fan tracks for the hit game Deltarune that I\'ve made ',
                imageUrl: DeltaruneSleve,
                tracks: [{
                    title: 'It\s DISCO time!',
                    duration: '2:55',
                    alt: 'A disco version of It\'s TV Time! by Toby Fox',
                    src: new Howl({
                        src: DiscoTenna,
                        autoplay: false,
                        loop: false
                    })
                },
                {
                    title: 'Chapter 1-2 Boss Medley',
                    duration: '8:14',
                    alt: 'A medley of all major boss encounters in Deltarune Chapter 1-2',
                    src: new Howl({
                        src: Chapter12Medley,
                        autoplay: false,
                        loop: false
                    })
                },
                {
                    title: 'Tennittus',
                    duration: '1:25',
                    alt: 'An imagined version of a pre-chapter 3 theme for Tenna',
                    src: new Howl({
                        src: TennaPreTenna,
                        autoplay: false,
                        loop: false
                    })
                }]
            }
        ]
    }
    get getAlbums(): Album[] {
        return this._albumList;
    }
    public getTrack(albumIndex: number, songIndex: number): Track {
        return this._albumList[albumIndex].tracks[songIndex];
    }
    public getNextInAlbum(albumIndex: number, songIndex: number, byHowMuch: number, isLoopable: boolean = false, isRandom: boolean = false): number {
        if (albumIndex > this._albumList.length || albumIndex < 0 || songIndex < 0) return -1; //Out of bounds assertions.
        let _maxTracks = this._albumList[albumIndex].tracks.length;
        if (songIndex >= _maxTracks) return -1; //Tracks out of bound assertions
        if (songIndex === (_maxTracks - 1) && !isLoopable && !isRandom && byHowMuch > 0) return songIndex;
        if (isRandom) return this.getRandomIntSansIndex(_maxTracks, songIndex);
        if (isLoopable && songIndex === _maxTracks - 1) return 0;
        if (byHowMuch < 0 && songIndex === 0) return 0;
        return songIndex + byHowMuch;
    }
    private getRandomIntSansIndex(max: number, toExclude: number): number {
        if (toExclude == 0) return (Math.floor(Math.random() * (max - 1)) + 1);
        if (toExclude == max - 1) return Math.floor(Math.random() * (max - 1));
        let sectionChoice = Math.floor(Math.random() * 2);
        if (sectionChoice == 0) return Math.floor(Math.random() * toExclude);
        else return Math.floor(Math.random() * ((max - 1) - toExclude)) + (toExclude + 1);
    }
}