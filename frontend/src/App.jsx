import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HeroSection from './components/HeroSection/HeroSection';
import ServiceOverview from './components/ServiceOverview/ServiceOverview';
import MainCTA from './components/MainCTA/MainCTA';
import Testimonials from './components/Testimonials/Testimonials';
import PortfolioGallery from './components/PortofolioGallery/PortfolioGallery';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import StartEvent from './components/StartEvent/StartEvent';


import InvitatiiNunta from './pages/Nunta/InvitatiiNunta/InvitatiiNunta';
import SiteInvitatiiNunta from './pages/Nunta/SiteInvitatiiNunta/SiteInvitatiiNunta';
import MarturiiNunta from './pages/Nunta/MarturiiNunta/MarturiiNunta';
import TavitaNunta from './pages/Nunta/Tavite/TavitaNunta';
import DecorNunta from './pages/Nunta/DecorNunta/DecorNunta';

import InvitatiiBotez from './pages/Botez/InvitatiiBotez/InvitatiiBotez';
import TavitaBotez from './pages/Botez/Tăvițe/TavitaBotez';
import Baita from './pages/Botez/Băiță/Baita';
import MarturiiBotez from './pages/Botez/MărturiiBotez/MarturiiBotez';
import DecorBotez from './pages/Botez/DecorBotez/DecorBotez';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceOverview />
      <MainCTA />
      <Testimonials />
      <PortfolioGallery />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<StartEvent />} />
      <Route path="/nunta/invitatii" element={<InvitatiiNunta />} />
<Route path="/nunta/site-invitatii" element={<SiteInvitatiiNunta />} />
<Route path="/nunta/marturii" element={<MarturiiNunta />} />
<Route path="/nunta/decor" element={<DecorNunta />} />
<Route path="/nunta/tavite" element={<TavitaNunta />} />

<Route path="/botez/invitatii" element={<InvitatiiBotez />} />
<Route path="/botez/tavita" element={<TavitaBotez />} />
<Route path="/botez/baita" element={<Baita />} />
<Route path="/botez/marturii" element={<MarturiiBotez />} />
<Route path="/botez/decor" element={<DecorBotez />} />
    </Routes>
  );
}

export default App;
