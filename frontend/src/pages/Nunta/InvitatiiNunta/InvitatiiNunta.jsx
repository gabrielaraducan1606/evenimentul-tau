import React from 'react';
import { productsData } from '../../../data/productsData'; 
import styles from './InvitatiiNunta.module.css';
import Navbar from '../../../components/Navbar/Navbar';

const InvitatiiNunta = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Invitații de Nuntă</h1>
        <p className={styles.subtitle}>Descoperă colecția noastră de invitații elegante și personalizabile.</p>

        <div className={styles.grid}>
          {/* Extragem datele pentru invitații */}
          {productsData.invitatii.map((product) => (
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

export default InvitatiiNunta;
