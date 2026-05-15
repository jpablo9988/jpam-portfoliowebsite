import { BrowserRouter as Routes, Route, Navigate } from 'react-router-dom';
import ArtProjects from '../components/pages/ArtProjects';
import MusicProjects from '../components/pages/MusicProjects';
import DevProjects from '../components/pages/ProgrammingProjects';
import ContactMe from '@/components/pages/ContactMe';
import About from '@/components/pages/About';
import Home from '../components/pages/Home';
import ErrorPage from '../components/pages/ErrorPage';
import HarmonicRhythmBlog from '@/components/blog_pages/harmonic-rhythm';
import ManafuseBlog from '@/components/blog_pages/manafuse';
import RGWSPWA from '@/components/blog_pages/rgwspwa';

const AppNavigation = () => {
    return (
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

    );
}

export default AppNavigation;