import React from 'react';
import { productsData } from '../../../data/productsData';
import styles from './Baita.module.css'; // Poți refolosi CSS-ul din InvitatiiNunta
import Navbar from '../../../components/Navbar/Navbar';
import { useAppContext } from '../../../components/Context/AppContext';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const Baita = () => {
  const { addToFavorites, addToCart } = useAppContext();

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Seturi Băiță</h1>
        <p className={styles.subtitle}>
          Alege dintr-o gamă variată de seturi personalizate pentru ceremonia de a doua zi a botezului.
        </p>

        <div className={styles.grid}>
          {productsData.baita.map((product) => (
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

export default Baita;
