import { AccordionCard } from "../parts/AccordionCard";
import { HighlightSection } from "../parts/HighlightSection";
import OutlinedScaleButton from "../parts/buttons/OutlinedScaleButton";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";
import gameScreenshotTitle from "@/assets/hrhythm_blog_pics/gameScreenshotTitle.png"
import ConductorArchitecture from "@/assets/hrhythm_blog_pics/ConductorArchitecture.png"
import TutorialArchitecture from "@/assets/hrhythm_blog_pics/TutorialArchitecture.png"
import Level2 from "@/assets/hrhythm_blog_pics/level2.png"
import resultsLevel1 from "@/assets/hrhythm_blog_pics/resultsLevel1.png"
import ScaleDiv from "../parts/buttons/ScaleDiv";
import itchio from "@/assets/contact_logos/itchio.svg"


export default function HarmonicRhythmBlog() {
    const { projects, theme } = useContext(GlobalContext)
    const { id } = useParams();
    const project = projects.oneProject((id && !Number.isNaN(parseInt(id))) ? parseInt(id) : 0);
    return (<div
        className='flex flex-1 flex-col h-full justify-center items-center p-3 md:mb-25'
    >
        <AccordionCard title="Project - Case Study">
            <h1> <b><i>Making of:</i></b> Harmonic Scale - A Rhythm Game about Scale </h1>
            <HighlightSection>
                <div className="grid grid-cols-2 size-full">
                    <div className="grid grid-rows-3 items-start justify-center max-sm:pr-4">
                        <h2> Details </h2>
                        <div className="flex size-full items-start"><p>Project :<span className="opacity-50"> Game Jam </span> </p><br /></div>
                        <div className="flex size-full items-start"><p>Genre :<span className="opacity-50"> Rhythm Game </span><br /></p></div>
                        <div className="flex size-full justify-start"><p>Timeline : <span className="opacity-50">(2024) 96 hours + (2026) post-release updates. </span>
                        </p></div>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center">
                        <h2 className="pb-4"> My Role{(project.roles && project.roles?.length >= 1) ? "s" : ""} </h2>
                        <div className="grid grid-rows-2 justify-center items-center grid-flow-col w-full gap-2">
                            {(project.roles) ? project.roles.map((item, index) => (
                                <div className="z-11" key={"harmonicBlogWrapper" + index}>
                                    <OutlinedScaleButton
                                        id={"harmonicBlogScaleButton-insides" + index}
                                        key={"harmonicBlogScaleButton" + index}
                                        textDescriptor={item}
                                        fontClassName="text-xs max-sm:text-2xs"
                                        scaleOnClick={1.1} />
                                </div>)) : (<p> No roles found. </p>)}
                        </div>
                    </div>
                </div>
            </HighlightSection>
            <div className="px-5">
                <p className="text-lg"> <b>Making a rhythm game is not easy.</b></p>
                <p className="justify-start text-start  space-y-2"><br /> This is something I had to learn throughout the course of the 2024's GMTK Game Jam.
                    This is because syncing together animations, user inputs and music is tricky; even a small desync of miliseconds from any of these systems can ruin the experience.
                    This is doubly so when you’re planning on having a game with a compatible WebGL build (or be playable in your web browser).
                    <i> Triple-y</i> so when you have a really short time frame of figuring all of this out.
                    Throughout this project, I found a lot of pitfalls you can have when making a rhythm game in Unity, and learned solutions to these problems - sometimes the hard way.
                    <br /><br />
                    <b>The result?</b> I managed to complete and deliver a bite-sized, one-button, quirky rhythm game where everything works in beat to the music,
                    even if it took a couple of post-jam updates to make it fully work in its web version.  </p>
            </div>
            <div className="flex w-full px-2.5"><h2 className="text-start py-2"> <b> Section 1 </b>: Games About Scaling Up</h2></div>
            <img src={gameScreenshotTitle} alt="A Screenshot of the main menu for Harmonic Scale" className="w-200"></img>
            <p className="opacity-50 text-center italic"> A Screenshot of the main menu for Harmonic Scale </p>
            <div className="px-5">
                <p className="justify-start text-start space-y-2">
                    After applying to the game jam, the team started to brainstorm ideas.
                    When the artist, <b>Dool</b>, pitched the idea of a rhythm game where every note you hit builds to something bigger, we went with it.
                    One of the reasons was because I had experience in building the basic mechanics of a rhythm game in Unity due to a previous personal project I prototyped.
                    <br />

                    We had limited time to complete this as the game jam was three days long, and not everyone was available everyday.
                    I ended up taking the mantle of the 'lead programmer', as our other programmer, Gargantus, only had a couple of hours available to work for this project.
                    We had a small discovery phase when finding the aesthetic and design of the game, basing ourselves in the stylish, simple and fun gameplay of games such as <b>Rhythm Heaven. </b>
                    We also decided to go with a one-button game keeping in mind to avoid introducing time-consuming design decisions.
                </p>
            </div>
            <div className="flex w-full px-2.5"><h2 className="text-start py-2"> <b> Section 2 </b>: Building a Music Conductor</h2></div>
            <div className="px-5">
                <p className="justify-start text-start  space-y-2">
                    <b>The Conductor</b> is the metronome system that follows a music track and measures each beat length, tempo change, loop metrics, beats-per-minute/seconds, analogue timing, etc.
                    When I first built it, I was already aware of the issues of using <i>"Time.deltaTime" </i>as a temporal reference when tracking music.
                    <i> Time.deltaTime </i>, or just Delta Time, is the length of time taken between the current frame and the previous frame in Unity when using the built-in Update function.
                    It’s often used to keep consistency in-game between movement, animation and other things which is essential in an inconsistent frame-rate.
                    <br />
                    <br />
                </p>
                <div className="flex w-full items-center justify-center py-4"><img src={ConductorArchitecture} alt="A diagram of the flow of information for the Audio Module in Harmonic Scale." className="w-100 items-center"></img></div>
                <p className="opacity-50 text-center italic pb-4"> A diagram of the flow of information for the Audio Module in Harmonic Scale. </p>
                <p className="justify-start text-start  space-y-2">
                    <b>The Problem?</b> - DeltaTime is not ideal for tracking audio because it is not dictated by frames per second but by its own reference clock ( measured by Audio Settings - DSP Time).
                    What happens if the track stutters for a small amount of time? Or the games dips in frame-rate but the music continues normally? Or the player clicks off the game? – This would cause the metronome to go out of rhythm.
                    At first, we used the DSP Time to take into account these issues, but it was still not perfect.
                    <br />

                    This manifested in the <b>Web Build</b> of the game: Resources are more limited in a web browser, and as audio loading and script execution are not in the same ‘thread’, it would cause small differentials in time between them.
                    This would cause inconsistency with the metronome as it would start earlier or later than expected.
                    <br />

                    <b> The Solution?</b> This is something that is obvious in hindsight, but using the actual sample time data from the music track managed to signal the Conductor script to sync with the audio, only starting when the music is loaded and started playing.
                    This was needed as using the Load() and Play() functions for the AudioSource component in Unity would not take into account when the track actually starts reproducing (due to loading issues).
                    Using the Load in Background settings for the Music Sample would also cause problems, as the track would not wait until the script thread ended to start reproducing, causing small desyncs.
                    I actually ended up using the same technique for this website and its music reproduction tab. <br />
                    <br />
                    <i>Everything that relied on the music's beat linked up to this Conductor system , so it was essential to get it right.</i>
                </p>
            </div>
            <div className="flex w-full px-2.5"><h2 className="text-start py-2"> <b> Section 3 </b>: Building for Modularity and Scalability</h2></div>
            <div className="px-5">
                <p className="justify-start text-start  space-y-2 pb-2">
                    Another important characteristic I made sure to have in mind when building the modules for this project was ensuring easy to re-use systems for different contexts. This means:
                </p>
                <ul className="list-disc pl-6 justify-start text-start  space-y-2 pb-2">
                    <li>Limit direct dependencies</li>
                    <li>Abstract links to explicit objects</li>
                    <li>Implement single responsibility whenever possible.</li>
                </ul>
                <p className="justify-start text-start  space-y-2">

                    <br />
                    <span className="flex w-full justify-center font-bold text-lg">The main example of this is the tutorial system.</span>
                    <br />
                </p>
                <div className="flex w-full items-center justify-center pb-4"><img src={TutorialArchitecture} className="w-100 items-center"></img></div>
                <p className="opacity-50 text-center italic pb-4"> A diagram of the architecture for the Tutorial Module in Harmonic Scale </p>
                <p className="justify-start text-start  space-y-2">
                    The tutorial system in this game is composed in nodes. Each node has a start and an end function, leaving the state of the game back to how it was before.
                    A node could represent a dialogue section, a demonstration section, a playable section or a cut-scene section.
                    This is important as the player should be able to practice the level’s patterns before doing the main stage for the first time.
                    Like Lego pieces, you can mix and match each tutorial node to suit the requirements of a level. For example,
                    once I finished the tutorial system for level one, it was really easy to build one for level two.
                    The only things I needed to change for this were the dialogue lines, music tracks and cut-scene timelines; I didn’t touch a line of code.
                    <br />
                    <br />
                    Another is the track mapping system. Each track uses re-usable scriptable objects with the characteristic of a beat pattern (like, for example, a pattern that requires the input of a user in three beats).
                    This track mapping system is then assigned to a ‘Rhythm Track’ – a wrapper for an audio track that contains core information such as BPM, tempo changes and pitch.
                    This way, you’d only need to state when a pattern is happening in the song and the game would take care of the rest.
                    If I ever come back to this game, I would love to implement a visual interface to make mapping even easier for future levels.
                </p>
                <div className="flex w-full px-2.5"><h2 className="text-start py-4"> <b> Section 4 </b>: Release, Problems, Post-Jam Updates and Polish</h2></div>
                <div className="flex w-full items-center justify-center py-4"><img src={Level2} alt="A Screenshot of Level 2 of Harmonic Scale mid-level." className="w-200 items-center"></img></div>
                <p className="opacity-50 text-center italic pb-4"> A Screenshot of Level 2 of Harmonic Scale mid-level. </p>
                <p className="justify-start text-start  space-y-2 pb-2">
                    We released the first version of this game right on time for the submission date. It ended up having some core issues, especially in the web version, which was the most played.
                    At the time of release, we were relying on animations to time the patterns and still using the DSP Audio parameter for keeping track of the music.
                    Using animations was a big problem they de-synced really easily because depended on the frame rate of the game, not the music's beat. This caused de-syncs in the gameplay,
                    causing poor experience for anyone who played it this way. As for the audio, because loading times are more pronounced in the web version, it tended to
                    either load before or after the starting mark for the metronome/conductor, causing desyncs as well.
                    <br />
                    I was left somewhat dissatisfied as we definitely over-scoped for this game jam. Building a rhythm game was hard enough, but building two levels alongside didn't give us enough time to polish what was already there.
                    Afterwards, we worked on an update to fix all the issues I mentioned prior, implementing the following fixes:
                    <br />
                </p>
                <ul className="list-disc pl-6 justify-start text-start space-y-2 ">
                    <li> All de-sync problems for both the Windows and web version of the game were fixed. </li>
                    <li> Clearer visuals.</li>
                    <li> New music and SFX for tutorial, menus, cutscenes, etc... (<i className="opacity-75">Courtesy of me! check them in my <a target="_blank" href="/projects/music">Music Section</a></i>).</li>
                    <li> An Interactive Tutorial. </li>
                    <li>A small progression system. </li>
                    <li>...among other small things. </li>
                </ul>
                <p className="justify-start text-start  space-y-2">
                    <br />
                    <i>The feedback left by game jam players and playtesters was crucial for this!</i>
                </p>
                <div className="flex w-full px-2.5"><h2 className="text-start py-4"> <b> Section 5 </b>: Key Learnings</h2></div>
                <p className="justify-start text-start  space-y-2 pb-2">

                    At the end, I was satisfied with the results of this project. I finished everything we set up to do even if there were some failures to learn from.
                    Well, I suppose that’s why I wanted to highlight it – This type of project is were you learn the most. Here are some of the takeaways:
                    <br />
                </p>
                <ul className="list-disc pl-6 justify-start text-start  space-y-2 pb-2">

                    <li><b>Timing is Everything:</b> Keeping track of time in a rhythm game is really important. Any small de-sync can cause a bad experience.</li>
                    <li><b>Usability and Scalability are great for this type of project:</b> It’s really important to follow SOLID principles in a component-based engine like Unity – I managed to save a lot of time when developing the second level after an initial time investment.</li>
                    <li><b>Scoping is hard:</b> Even the most trivial stuff can have hidden complexity.</li>
                </ul>
                <p className="justify-start text-start  space-y-2">
                    For three days of work, I think this was a job well done.
                    In hindsight, there’s also a vast amount of things I would change, implement or rework.
                    The gameplay could do with a twist of some kind to spruce it up, and a section were the player can measure their control input lag for maximum accuracy could be amazing as well.
                    The visuals were also done in a bit of a rush, with some placeholder images still left in the game.
                    I could say more but, alas, that’s the life of a developer – no game you work on is perfect… I still had a blast developing it, tho!
                </p>
                <div className="flex w-full items-center justify-center py-4"><img src={resultsLevel1} alt="A Screenshot of the results screen for Level 1 in Harmonic Scale" className="w-200 items-center"></img></div>
                <p className="opacity-50 text-center italic pb-4"> A Screenshot of the results screen for Level 1 in Harmonic Scale. </p>
                <HighlightSection>
                    <p className="z-11"> <span className="text-lg">Thank you so much for reading until the end!</span> <br /> <span className="opacity-50 italic">If you have any questions, feel free to ask me on my </span><a target="_blank" href='https://www.linkedin.com/in/dev-juan-amorocho/'>LinkedIn.</a>
                        <br />
                        <br />
                        <i className="md:hidden opacity-50"> Not suitable for mobile devices. </i> <br />
                        <b>
                            You can play the game here:</b>
                        <br /></p>
                    <div className="lg:flex w-full justify-center items-center pt-4 z-11 hidden">
                        <iframe src="https://itch.io/embed/2910899" width="552" height="167"><a href="https://team-tuna.itch.io/harmonic-scale">Harmonic Scale by Team Tuna, J~pxls, Gargantus, Dool, GoosypieOMEGA</a></iframe>
                    </div>
                    <div className="w-full items-center justify-center max-lg:flex hidden z-11 pt-4">
                        <a target="_blank" className=
                            {('flex justify-center items-center rounded-sm relative border-1 hover:scale-105 transition-all duration-150 cursor-pointer ') +
                                (theme == "dark" ? "bg-card-header" : "bg-white")
                            }
                            href='https://team-tuna.itch.io/harmonic-scale'
                        >
                            <ScaleDiv
                                defaultLogo={itchio}
                                defaultLogoDark={itchio}
                                className='sm:size-14 max-sm:size-12'
                            ></ScaleDiv>
                        </a></div>
                </HighlightSection>
            </div>
        </AccordionCard>
    </div >)
}