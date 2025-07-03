import React from 'react';
import { productsData } from '../../../data/productsData'; 
import styles from './MarturiiNunta.module.css';
import Navbar from '../../../components/Navbar/Navbar';

const MarturiiNunta = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Marturii de Nuntă</h1>
        <p className={styles.subtitle}>Aici găsești marturii elegante pentru nunta ta.</p>

        <div className={styles.grid}>
          {/* Extragem datele pentru marturii */}
          {productsData.marturii.map((product) => (
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

export default MarturiiNunta;
