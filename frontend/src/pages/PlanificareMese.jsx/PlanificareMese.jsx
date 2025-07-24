// PlanificareMese.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Importă Link pentru a crea un buton care să ducă la pagina de înregistrare sau logare
import Navbar from '../../components/Navbar/Navbar'; 
import styles from './PlanificareMese.module.css'; 
import { FaUser } from 'react-icons/fa';

const PlanificareMese = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return (
      <div className={styles.pageWrapper}>
        <Navbar isAuthenticated={isAuthenticated} />
        <div className={styles.container}>
          <h1>Planifică Mesele pentru Evenimentul Tău</h1>
          <p className={styles.infoText}>
            Organizează mesele pentru evenimentul tău într-un mod simplu și elegant. 
            Creează un cont pentru a salva aranjamentele tale, adăuga invitați și trimite invitațiile prin SMS.
          </p>
          <p className={styles.infoText}>
            Începe planificarea evenimentului tău acum, prin crearea unui cont sau autentificarea contului existent!
          </p>

          <div className={styles.buttonGroup}>
            <Link to="/inregistrare">
              <button className={styles.registerButton}>
                <FaUser /> Crează un cont
              </button>
            </Link>

            <Link to="/login">
              <button className={styles.loginButton}>
                <FaUser /> Loghează-te
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <Navbar isAuthenticated={isAuthenticated} />
      <div className={styles.container}>
        <h1>Planifică Mesele pentru Evenimentul Tău</h1>
        <p className={styles.infoText}>
          Acum poți organiza mesele pentru evenimentul tău, adăugând invitați și creând aranjamente personalizate.
        </p>
        {/* Alte funcționalități vor fi adăugate pentru utilizatorii autentificați */}
      </div>
    </div>
  );
};

export default PlanificareMese;
