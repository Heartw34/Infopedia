import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import Toc from './pages/Toc';
import About from './pages/About';
import Sources from './pages/Sources';
import Links from './pages/Links';

import Animals from './pages/Animals';
import Biology from './pages/Biology';
import Hystory from './pages/Hystory';

import Predators from './pages/LittlePages/Predators';
import Rodents from './pages/LittlePages/Rodents';
import InWater from './pages/LittlePages/InWater';
import Artiodactyls from './pages/LittlePages/Artiodactyls';
import Birds from './pages/LittlePages/Birds';

import Cells from './pages/LittlePages/Cells';
import Genetics from './pages/LittlePages/Genetics';
import Ecology from './pages/LittlePages/Ecology';

import Catharheus from './pages/LittlePages/Catharheus';
import Archaea from './pages/LittlePages/Archaea';
import Proterozoic from './pages/LittlePages/Proterozoic';
import Paleozoic from './pages/LittlePages/Paleozoic';
import Mesozoic from './pages/LittlePages/Mesozoic';
import Cenozoic from './pages/LittlePages/Cenozoic';

import Music from './components/Music';
import Contacts from './pages/Contacts'

import Anim from './pages/Other/Anim'
import Biol from './pages/Other/Biol'
import Hist from './pages/Other/Hist'



import './App.css';

function MainLayout() {
  const location = useLocation();
  let pageClass = location.pathname.split('/')[1];
  if (pageClass === '') pageClass = 'home';

  return (
    <div className={`app-wrapper ${pageClass}`}>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toc" element={<Toc />} />
        <Route path="/about" element={<About />} />

        <Route path="/sources" element={<Sources />} />
        <Route path="/links" element={<Links />} />

        <Route path="/animals" element={<Animals />} />
        <Route path="/biology" element={<Biology />} />
        <Route path="/history" element={<Hystory />} />

        <Route path="/rodents" element={<Rodents />} />
        <Route path="/predators" element={<Predators />} />
        <Route path="/inwater" element={<InWater />} />
        <Route path="/artiodactyls" element={<Artiodactyls />} />
        <Route path="/birds" element={<Birds />} />

        <Route path="/cells" element={<Cells />} />
        <Route path="/genetics" element={<Genetics />} />
        <Route path="/ecology" element={<Ecology />} />

        <Route path="/сatharheus" element={<Catharheus />} />
        <Route path="/archaea" element={<Archaea />} />
        <Route path="/proterozoic" element={<Proterozoic />} />
        <Route path="/paleozoic" element={<Paleozoic />} />
        <Route path="/mesozoic" element={<Mesozoic />} />
        <Route path="/cenozoic" element={<Cenozoic />} />
        <Route path="/contacts" element={<Contacts />}/>

        <Route path="/other/anim" element={<Anim />}/>
        <Route path="/other/biol" element={<Biol />}/>
        <Route path="/other/hist" element={<Hist />}/>
      </Routes>
        <Music />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;