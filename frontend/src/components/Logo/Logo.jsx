import React, { useState } from 'react';
import styles from './Logo.module.css';

const Logo = ({ size = 300 }) => {
  const [error, setError] = useState(false);

  const dimension = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div className={styles.logoWrapper}>
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
