// src/pages/Servicii/DecorBotez.js
import React from 'react';
import { productsData } from '../../../data/productsData';
import styles from './DecorBotez.module.css'; // sau refolosește InvitatiiNunta.module.css
import Navbar from '../../../components/Navbar/Navbar';
import { useAppContext } from '../../../components/Context/AppContext';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const DecorBotez = () => {
  const { addToFavorites, addToCart } = useAppContext();

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Decor pentru Botez</h1>
        <p className={styles.subtitle}>
          Alege dintr-o gamă variată de decoruri personalizabile pentru botezul micuțului tău.
        </p>

        <div className={styles.grid}>
          {productsData.decorBotez.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={product.title} className={styles.image} />
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.description}>{product.description}</p>
              <span className={styles.price}>{product.price}</span>

              <div className={styles.actions}>
                <button onClick={() => addToFavorites(product)} className={styles.iconButton}>
                  <FaHeart />
                </button>
                <button onClick={() => addToCart(product)} className={styles.iconButton}>
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DecorBotez;
