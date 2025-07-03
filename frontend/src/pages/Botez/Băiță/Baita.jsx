// src/pages/Servicii/Baita.js
import React from 'react';
import { productsData } from '../../../data/productsData'; // Importă datele
import styles from './Baita.module.css'; // Fișierul de stiluri
import Navbar from '../../../components/Navbar/Navbar';

const Baita = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Seturi Băiță</h1>
        <p className={styles.subtitle}>Alege dintr-o gamă variată de seturi personalizate pentru ceremonia de a doua zi a botezului.</p>

        <div className={styles.grid}>
          {/* Extragem datele pentru seturile de băiță */}
          {productsData.baita.map((product) => (
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

export default Baita;
