import React from 'react';
import styles from './MainCTA.module.css';

const MainCTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Gata să-ți începi evenimentul de vis?</h2>
        <p className={styles.subtitle}>
          Creează-ți contul, personalizează invitațiile și organizează fiecare detaliu cu ușurință.
        </p>
        <a href="/start" className={styles.ctaButton}>
          🎉 Creează evenimentul tău
        </a>
      </div>
    </section>
  );
};

export default MainCTA;
