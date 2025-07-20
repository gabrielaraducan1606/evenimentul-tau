import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../components/Context/AppContext';
import Navbar from '../../components/Navbar/Navbar';
import styles from './CosPage.module.css';
import { FaTrash, FaPlus, FaMinus, FaHeart } from 'react-icons/fa';

const CosPage = () => {
  const navigate = useNavigate();
  const {
    cart,
    setCart,
    increaseQuantity,
    decreaseQuantity,
    addToFavorites
  } = useAppContext();

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>🛒 Coșul tău de cumpărături</h1>

        {cart.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={styles.empty}>Coșul tău este gol momentan.</p>
            <button
              className={styles.shopBtn}
              onClick={() => navigate('/nunta/invitatii')}
            >
              Mergi în magazin
            </button>
          </div>
        ) : (
          <>
            <div className={styles.grid}>
              {cart.map((product) => (
                <div key={product.id} className={styles.card}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                  />
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <span className={styles.price}>
                    {product.price} lei / buc
                  </span>

                  <div className={styles.quantityBox}>
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className={styles.qtyBtn}
                    >
                      <FaMinus />
                    </button>
                    <span className={styles.qtyNumber}>{product.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className={styles.qtyBtn}
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <div className={styles.actions}>
                    <button
                      className={styles.favoriteBtn}
                      onClick={() => addToFavorites(product)}
                    >
                      <FaHeart /> Favorite
                    </button>

                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(product.id)}
                    >
                      <FaTrash /> Elimină
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.totalBox}>
              <strong>Total:</strong> {total.toFixed(2)} lei
              <button className={styles.checkoutBtn}>Finalizează comanda</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CosPage;
