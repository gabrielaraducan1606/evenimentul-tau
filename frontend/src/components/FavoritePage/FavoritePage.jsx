import React from 'react';
import { useAppContext } from '../../components/Context/AppContext';
import Navbar from '../../components/Navbar/Navbar';
import styles from './FavoritePage.module.css';
import { FaTrash } from 'react-icons/fa';

const FavoritePage = () => {
  const { favorites, setFavorites } = useAppContext();

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>❤️ Lista mea de favorite</h1>
        {favorites.length === 0 ? (
          <p className={styles.empty}>Nu ai produse în lista de favorite.</p>
        ) : (
          <div className={styles.grid}>
            {favorites.map((product) => (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={product.title} className={styles.image} />
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <span className={styles.price}>{product.price}</span>
                <button className={styles.removeBtn} onClick={() => removeFromFavorites(product.id)}>
                  <FaTrash /> Șterge
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FavoritePage;
