import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ServiceOverview from './components/ServiceOverview/ServiceOverview';
import MainCTA from './components/MainCTA/MainCTA';
import Testimonials from './components/Testimonials/Testimonials';
import PortfolioGallery from './components/PortofolioGallery/PortfolioGallery';
import Footer from './components/Footer/Footer';
import StartEvent from './components/StartEvent/StartEvent';

import InvitatiiNunta from './pages/Nunta/InvitatiiNunta/InvitatiiNunta';
import SiteInvitatiiNunta from './pages/Nunta/SiteInvitatiiNunta/SiteInvitatiiNunta';
import MarturiiNunta from './pages/Nunta/MarturiiNunta/MarturiiNunta';
import TavitaNunta from './pages/Nunta/Tavite/TavitaNunta';
import DecorNunta from './pages/Nunta/DecorNunta/DecorNunta';

import Trusouri from './pages/Botez/Trusouri/Trusouri';
import InvitatiiBotez from './pages/Botez/InvitatiiBotez/InvitatiiBotez';
import TavitaBotez from './pages/Botez/Tăvițe/TavitaBotez';
import Baita from './pages/Botez/Băiță/Baita';
import MarturiiBotez from './pages/Botez/MărturiiBotez/MarturiiBotez';
import DecorBotez from './pages/Botez/DecorBotez/DecorBotez';

import FavoritePage from './components/FavoritePage/FavoritePage';
import CosPage from './components/CosPage/CosPage';

import RegisterForm from './pages/RegisterForm/RegisterForm';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Login from './pages/LoginForm/LoginForm';

import PlanificareMese from './pages/PlanificareMese.jsx/PlanificareMese';
import { AppProvider } from './components/Context/AppContext';
import { jwtDecode } from 'jwt-decode';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      try {
        const decoded = jwtDecode(token);
        setUserEmail(decoded.email || '');
      } catch (err) {
        console.error('Eroare la decodarea tokenului:', err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<StartEvent />} />

        {/* Nuntă */}
        <Route path="/nunta/invitatii" element={<InvitatiiNunta />} />
        <Route path="/nunta/site-invitatii" element={<SiteInvitatiiNunta />} />
        <Route path="/nunta/marturii" element={<MarturiiNunta />} />
        <Route path="/nunta/decor" element={<DecorNunta />} />
        <Route path="/nunta/tavite" element={<TavitaNunta />} />

        {/* Botez */}
        <Route path="/botez/trusouri" element={<Trusouri />} />
        <Route path="/botez/invitatii" element={<InvitatiiBotez />} />
        <Route path="/botez/tavita" element={<TavitaBotez />} />
        <Route path="/botez/baita" element={<Baita />} />
        <Route path="/botez/marturii" element={<MarturiiBotez />} />
        <Route path="/botez/decor" element={<DecorBotez />} />

        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/cos" element={<CosPage />} />

        {/* Autentificare */}
        <Route path="/login" element={<Login />} />
        <Route path="/inregistrare" element={<RegisterForm />} />
        <Route path="/profil" element={<ProfilePage />} />

        {/* Planificare Mese */}
        <Route path="/planificare-mese" element={<PlanificareMese isAuthenticated={isAuthenticated} />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
