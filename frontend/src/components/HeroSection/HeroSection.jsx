import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Evenimente de vis încep cu detaliile perfecte
        </h1>
        <p className={styles.subtitle}>
          Invitații, decorațiuni și organizare completă – totul într-un singur loc.
        </p>
        <a href="/start" className={styles.button} aria-label="Începe organizarea fără cont">
          ➤ Începe organizarea fără cont
        </a>
      </div>
      <div className={styles.elementsWrapper}>
        {/* Adăugăm mai multe bile roz în secțiune */}
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </section>
  );
};

export default HeroSection;
