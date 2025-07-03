// src/pages/Servicii/SiteInvitatiiNunta.js
import React, { useState } from 'react';
import styles from './SiteInvitatiiNunta.module.css';
import Navbar from '../../../components/Navbar/Navbar';

const SiteInvitatiiNunta = () => {
  // State pentru a salva datele introduse de utilizator
  const [brideName, setBrideName] = useState('');
  const [groomName, setGroomName] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [weddingLocation, setWeddingLocation] = useState('');
  const [invitationLink, setInvitationLink] = useState('');

  // Funcția pentru generarea invitației tip site
  const generateInvitation = () => {
    setInvitationLink(
      `https://www.evenimentultau.ro/invitatie/${brideName}-${groomName}-${weddingDate}`
    );
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Creează Invitația Tip Site</h1>
        <p className={styles.subtitle}>
          Completează câmpurile de mai jos pentru a crea invitația ta de nuntă.
        </p>

        {/* Formular de personalizare */}
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="brideName">Numele Miresei:</label>
            <input
              type="text"
              id="brideName"
              value={brideName}
              onChange={(e) => setBrideName(e.target.value)}
              placeholder="Ex: Maria"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="groomName">Numele Mirelui:</label>
            <input
              type="text"
              id="groomName"
              value={groomName}
              onChange={(e) => setGroomName(e.target.value)}
              placeholder="Ex: Andrei"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="weddingDate">Data Nuntii:</label>
            <input
              type="date"
              id="weddingDate"
              value={weddingDate}
              onChange={(e) => setWeddingDate(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="weddingLocation">Locația Nuntii:</label>
            <input
              type="text"
              id="weddingLocation"
              value={weddingLocation}
              onChange={(e) => setWeddingLocation(e.target.value)}
              placeholder="Ex: București, Palatul Regal"
            />
          </div>

          {/* Buton pentru a genera invitația */}
          <button type="button" onClick={generateInvitation} className={styles.generateButton}>
            Generează Invitația
          </button>
        </form>

        {/* Dacă invitația este generată, afișăm previzualizarea */}
        {invitationLink && (
          <div className={styles.invitationPreview}>
            <h2>Invitația ta:</h2>
            <p>Vizualizează invitația ta personalizată la: <a href={invitationLink} target="_blank" rel="noopener noreferrer">{invitationLink}</a></p>
          </div>
        )}
      </div>
    </>
  );
};

export default SiteInvitatiiNunta;

