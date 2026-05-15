import { Navigate, Route, Routes } from "react-router-dom";
import SideHeader from "./SideHeader";
import TopHeader from "./TopHeader";
import ArtProjects from '@/components/pages/ArtProjects';
import ContactMe from '@/components/pages/ContactMe';
import About from '@/components/pages/About';
import Home from '@/components/pages/Home';
import ErrorPage from '@/components/pages/ErrorPage';
import AboutTileG from "@/assets/bg_imgs/AboutTile_Simple_G.png"
import MusicProjects from "./pages/MusicProjects";
import DevProjects from "./pages/ProgrammingProjects";
import MusicTab from "./parts/MusicTab";
import HarmonicRhythmBlog from "./blog_pages/harmonic-rhythm";
import ManafuseBlog from "./blog_pages/manafuse";
import RGWSPWA from "./blog_pages/rgwspwa";

function MainPage() {
    return (
        <div className="antialiased select-none">
            <div className={'flex min-h-screen min-w-screen flex-col'}>
                <TopHeader />
                <SideHeader />
                <MusicTab />
                <div id="main_screen" dir="ltr" className="flex flex-1 sm:ps-35 overflow-auto ">
                    <div className="w-full">
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/projects/art" element={<ArtProjects />}></Route>
                            <Route path="/projects/music" element={<MusicProjects />}></Route>
                            <Route path="/projects/dev" element={<DevProjects />}></Route>
                            <Route path="/about" element={<About />}></Route>
                            <Route path="/contact_me" element={<ContactMe />}></Route>
                            <Route path="/projects/harmonic-rhythm/:id" element={<HarmonicRhythmBlog />}></Route>
                            <Route path="/projects/manafuse/:id" element={<ManafuseBlog />}></Route>
                            <Route path="/projects/rgwspwa/:id" element={<RGWSPWA />}></Route>
                            {<Route path="/where" element={<ErrorPage />}></Route>}
                            <Route path="*" element={<Navigate to="/where" />} />
                        </Routes>
                    </div>
                </div>
            </div>
            <div className="bg">
                {/*                 <Wave fill='#f79902'
                    className="bottom-0 fixed -z-1 left-0 right-0"
                    paused={false}
                    style={{ display: 'inline-block' }}
                    options={{
                        height: 30,
                        amplitude: 15,
                        speed: 0.3,
                        points: 4
                    }}
                /> */}
                <div className="fixed w-screen h-screen bg-size-[auto_384px] -z-666 top-0 opacity-8 "
                    style={{ backgroundImage: `url(${AboutTileG}` }}>
                </div>
                <div className="fixed w-screen h-screen bg-background top-0 -z-999 " />
            </div>
        </div>
    )
}
export default MainPage;