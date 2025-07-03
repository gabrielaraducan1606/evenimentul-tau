import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Folosește useNavigate în loc de useHistory
import styles from './Logo.module.css';

const Logo = ({ size = 300 }) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Inițializăm useNavigate pentru a naviga

  const dimension = {
    width: `${size}px`,
    height: `${size}px`,
  };

  // Funcția de navigare la pagina principală
  const handleLogoClick = () => {
    navigate('/'); // Folosește navigate în loc de history.push pentru a redirecționa utilizatorul
  };

  return (
    <div className={styles.logoWrapper} onClick={handleLogoClick}> {/* Apelăm funcția la click pe logo */}
      {error ? (
        <div
          style={dimension}
          className={styles.logoFallback}
        >
          ME
        </div>
      ) : (
        <img
          src="/assets/logoEvenimentulTau.png"
          alt="Logo"
          style={dimension}
          className={styles.logoImage}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

export default Logo;
