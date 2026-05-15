import HarmonicScale from '@/assets/project_thumbnails/hRhythmThumbnail.png'
import Manafuse from '@/assets/project_thumbnails/MainMenuIllustration.png'
import SoK from '@/assets/project_thumbnails/TitleScreen.png'
import RGWS from '@/assets/project_thumbnails/RGWS-PwALOGO.gif'
import OER from '@/assets/project_thumbnails/GearSimulatorThumbnail.png'
import YourHealth from '@/assets/project_thumbnails/emerging.png'
import HullBreach from '@/assets/project_thumbnails/hullbreach.png'


export type Project = {
    title: string,
    thumbnail: string,
    abstract: string,
    category: 'Game' | 'FullStack',
    madeFor?: string,
    tools?: string[],
    roles?: string[],
    isHighlight?: boolean,
    detailsPage?: string,
}
export class Projects {
    private _allProjects: Project[];
    constructor() {
        this._allProjects = [
            {
                title: "RGWS-PwA",
                abstract: "A robotic exercise assistance module for people with Dementia. " +
                    "",
                madeFor: " Thesis Project for my Bachelors. (Highlight page under construction)",
                category: "FullStack",
                tools: [
                    "Java",
                    "Python",
                    "Qi"
                ],
                roles: [
                    "Developer"
                ],
                thumbnail: RGWS,
                detailsPage: "https://repository.javeriana.edu.co/items/0175cc12-b8a3-4c7d-8e03-d55d1021eb51",
                isHighlight: false
            },
            {
                title: "Harmonic Scale",
                abstract: "A simple, one button rhythm game based on games like Rhythm Heaven." +
                    "",
                madeFor: " Made for GMTK 2024's game jam.",
                category: "Game",
                tools: [
                    "Unity 2022",
                    "Trello"
                ],
                roles: [
                    "Main Programmer",
                    "Musician",
                    "Assistant Artist"
                ],
                thumbnail: HarmonicScale,
                detailsPage: "/projects/harmonic-rhythm/1",
                isHighlight: true
            },
            {
                title: "Manafuse",
                abstract: "A top-down card-based 2.5D action game where your health and mana are the same." +
                    "",
                madeFor: " Capstone Project for my Game Programming A.D. (Highlight page under construction)",
                category: "Game",
                tools: [
                    "Unity 6",
                    "Jira"
                ],
                roles: [
                    "Programmer",
                    "Musician",
                    "Main Artist"
                ],
                thumbnail: Manafuse,
                detailsPage: "https://github.com/jpablo9988/ManaFuse",
                isHighlight: false
            },
            {
                title: "Society of Killers",
                abstract: "A whodunnit randomized visual novel mystery game about finding a killer in a cruise ship. " +
                    "",
                madeFor: " Made for GMTK 2023's Pixel Game Jam",
                category: "Game",
                tools: [
                    "Unity 2022",
                    "Trello"
                ],
                roles: [
                    "Lead Developer",
                ],
                thumbnail: SoK,
                detailsPage: "https://github.com/jpablo9988/PixelGameJam2023",
                isHighlight: false
            },
            {
                title: "Planetary Gearset Simulator",
                abstract: "Physics-based simulator created in Unity. Simulates a Planetary Gearset with adjustable cogs. " +
                    "",
                madeFor: " Made as part of Centennial College's OER Lab",
                category: "Game",
                tools: [
                    "Unity 2022",
                ],
                roles: [
                    "Lead Developer",
                ],
                thumbnail: OER,
                detailsPage: "https://jpablo9988.github.io/PlanetaryGearSimulation/",
                isHighlight: false
            },
            {
                title: "Hull Breach",
                abstract: "Physics-based simulator created in Unity. Simulates a Planetary Gearset with adjustable cogs. " +
                    "",
                madeFor: " Tower Defense Game for the Game Programming Course at Centennial College",
                category: "Game",
                tools: [
                    "Unity 2022",
                ],
                roles: [
                    "Lead Developer",
                ],
                thumbnail: HullBreach,
                detailsPage: "https://github.com/Arpitsavaliya/Tower-Defense",
                isHighlight: false
            },
            {
                title: "Your Health",
                abstract: "GraphQL + AI from Emerging Technologies Course at Centennial College " +
                    "",
                madeFor: " Final Project for Emerging Tech. Course using GraphQL + Tensorflow",
                category: "FullStack",
                tools: [
                    "React",
                    "Apollo GraphQL",
                ],
                roles: [
                    "Full-stack Developer",
                ],
                thumbnail: YourHealth,
                detailsPage: "https://github.com/jpablo9988/FullStackWebApp-EmergingTech-FinalProject/",
                isHighlight: false
            },
        ]
    }
    public addProject(newProject: Project) {
        this._allProjects.push(newProject);
    }
    get allProjects(): Project[] {
        return this._allProjects;
    }
    public oneProject(index: number): Project {
        return this._allProjects[index];
    }
    public findIndex(project: Project) {
        return this._allProjects.findIndex((value: Project) => project.title == value.title)
    }
}