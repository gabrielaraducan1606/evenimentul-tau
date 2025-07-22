import React from 'react';
import { productsData } from '../../../data/productsData';
import styles from './DecorNunta.module.css'; // Poți refolosi stilul de la Invitații
import Navbar from '../../../components/Navbar/Navbar';
import { useAppContext } from '../../../components/Context/AppContext';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const DecorNunta = () => {
  const { addToFavorites, addToCart } = useAppContext();

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Decor Nuntă</h1>
        <p className={styles.subtitle}>Alege dintr-o gamă variată de decoruri personalizate pentru nunta ta.</p>

        <div className={styles.grid}>
          {productsData.decorNunta.map((product) => (
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

export default DecorNunta;
