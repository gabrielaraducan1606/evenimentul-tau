// src/pages/Servicii/TavitaBotez.js
import React from 'react';
import { productsData } from '../../../data/productsData'; // Importă datele
import styles from './TavitaBotez.module.css'; // Fișierul de stiluri
import Navbar from '../../../components/Navbar/Navbar';

const TavitaBotez = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Tăvițe pentru Botez</h1>
        <p className={styles.subtitle}>Alege dintr-o gamă variată de tăvițe personalizabile pentru botezul micuțului tău.</p>

        <div className={styles.grid}>
          {/* Extragem datele pentru tăvițele de botez */}
          {productsData.botezTavite.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={product.title} className={styles.image} />
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.description}>{product.description}</p>
              <span className={styles.price}>{product.price}</span>
              <button className={styles.button}>Vezi detalii</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TavitaBotez;
