import React from 'react';
import { productsData } from '../../../data/productsData';
import styles from './MarturiiNunta.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import { useAppContext } from '../../../components/Context/AppContext';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const MarturiiNunta = () => {
  const { addToFavorites, addToCart } = useAppContext();

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Mărturii de Nuntă</h1>
        <p className={styles.subtitle}>Aici găsești mărturii elegante pentru nunta ta.</p>

        <div className={styles.grid}>
          {productsData.marturii.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={product.title} className={styles.image} />
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.description}>{product.description}</p>
              <span className={styles.price}>{product.price}</span>

              <div className={styles.actions}>
                <button
                  onClick={() => addToFavorites(product)}
                  className={styles.iconButton}
                  title="Adaugă la favorite"
                >
                  <FaHeart />
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className={styles.iconButton}
                  title="Adaugă în coș"
                >
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

export default MarturiiNunta;
