import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection'; // Importăm HeroSection
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview'; // Importăm ServiceOverview
import PortfolioGallery from '../../components/PortofolioGallery/PortfolioGallery'; // Importăm PortfolioGallery
import styles from './ProfilePage.module.css'; // Fișierul CSS
import { FaUser } from 'react-icons/fa';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setErrorMsg('Nu ești autentificat');
      setLoading(false);
      return;
    }

    api.get('/users/profil', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setUserData(res.data);
      setLoading(false);
    })
    .catch(() => {
      setErrorMsg('Acces neautorizat');
      setLoading(false);
    });
  }, []);

  const navigateToPlanificareMese = () => {
    navigate('/planificare-mese');
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Profilul meu</h1>

        {loading ? (
          <p className={styles.message}>Se încarcă...</p>
        ) : errorMsg ? (
          <p className={styles.error}>{errorMsg}</p>
        ) : (
          <div className={styles.card}>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>ID cont:</strong> {userData._id}</p>

            <div className={styles.buttonGroup}>
              <a href="/schimba-parola" className={styles.button}>
                Schimbă parola
              </a>
              <button onClick={navigateToPlanificareMese} className={styles.planButton}>
                Planifică Mesele
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Folosim componentele din pagina principală */}
      <HeroSection />
      <ServiceOverview />
      <PortfolioGallery />
    </>
  );
};

export default ProfilePage;
