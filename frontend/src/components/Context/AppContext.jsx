import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  // ================== LOAD USER DATA ==================
  useEffect(() => {
    const loadUserData = async () => {
      const storedToken = localStorage.getItem('authToken');
      if (!storedToken) return;

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/users/login-token`,
          {},
          { headers: { Authorization: `Bearer ${storedToken}` } }
        );

        setFavorites(res.data.favorites || []);
        setCart(res.data.cart || []);
        setToken(storedToken);
      } catch (err) {
        console.error('Eroare la încărcarea datelor utilizatorului', err);
      }
    };

    loadUserData();
  }, []);

  // ================== SAVE TO BACKEND ==================
  const saveToBackend = async (cartData = cart, favData = favorites) => {
    if (!token) return;
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/users/save-data`,
        {
          cart: cartData,
          favorites: favData
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
    } catch (err) {
      console.error('Eroare la salvarea datelor:', err);
    }
  };

  // ================== FAVORITES ==================
  const addToFavorites = (product) => {
    setFavorites((prev) => {
      if (!prev.some((p) => p.id === product.id)) {
        const updated = [...prev, product];
        saveToBackend(cart, updated);
        return updated;
      }
      return prev;
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveToBackend(cart, updated);
      return updated;
    });
  };

  // ================== CART ==================
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      let updated;
      if (exists) {
        updated = prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        updated = [...prev, { ...product, quantity: 1 }];
      }
      saveToBackend(updated, favorites);
      return updated;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveToBackend(updated, favorites);
      return updated;
    });
  };

  const increaseQuantity = (id) => {
    setCart((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveToBackend(updated, favorites);
      return updated;
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prev) => {
      const updated = prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      saveToBackend(updated, favorites);
      return updated;
    });
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        favorites,
        setCart,
        setFavorites,
        addToCart,
        addToFavorites,
        removeFromCart,
        removeFromFavorites,
        increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
