import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h4 className={styles.title}>Evenimentul Tău</h4>
          <p>Tot ce ai nevoie pentru un eveniment de poveste: invitații, decor și organizare completă.</p>
        </div>
        <div>
          <h4 className={styles.title}>Linkuri utile</h4>
          <ul className={styles.linkList}>
            <li><a href="#servicii">Servicii</a></li>
            <li><a href="#portofoliu">Portofoliu</a></li>
            <li><a href="#testimoniale">Recenzii</a></li>
            <li><a href="/start">Creează eveniment</a></li>
          </ul>
        </div>
        <div>
          <h4 className={styles.title}>Contact</h4>
          <p>Email: contact@evenimentultau.ro</p>
          <p>Telefon: 0722 123 456</p>
          <p>WhatsApp disponibil</p>
        </div>
      </div>
      <div className={styles.bottomNote}>
        © {new Date().getFullYear()} Evenimentul Tău. Toate drepturile rezervate.
      </div>
    </footer>
  );
};

export default Footer;
