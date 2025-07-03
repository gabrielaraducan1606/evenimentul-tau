import React from 'react';
import styles from './PortofolioGallery.module.css';

const images = [
  '/images/portofoliu1.jpg',
  '/images/portofoliu2.jpg',
  '/images/portofoliu3.jpg',
  '/images/portofoliu4.jpg',
  '/images/portofoliu5.jpg',
  '/images/portofoliu6.jpg',
];

const PortfolioGallery = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Portofoliu</h2>

      <div className={styles.grid}>
        {images.map((src, index) => (
          <div key={index} className={styles.card}>
            <img src={src} alt={`Portofoliu ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <a href="/portofoliu" className={styles.button}>
          📷 Vezi portofoliul complet
        </a>
      </div>
    </section>
  );
};

export default PortfolioGallery;
