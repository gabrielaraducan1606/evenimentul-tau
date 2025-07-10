import React, { useEffect, useState } from 'react';
import api from '../../api';
import Navbar from '../../components/Navbar/Navbar';
import styles from './ProfilePage.module.css'; // vei crea acest fișier css

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

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

            <a href="/schimba-parola" className={styles.button}>
              Schimbă parola
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
