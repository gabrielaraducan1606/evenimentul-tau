import React from 'react';
import styles from './ServiceOverview.module.css';

const services = [
  {
    icon: '🎨',
    title: 'Invitații personalizate',
    description: 'Alege modele unice sau creează-ți propriul design.'
  },
  {
    icon: '💌',
    title: 'Invitații digitale (site)',
    description: 'Trimite invitații elegante cu RSVP și galerie.'
  },
  {
    icon: '🧷',
    title: 'Mărturii & trusouri',
    description: 'Produse speciale, atent lucrate, pentru evenimentul tău.'
  },
  {
    icon: '🪑',
    title: 'Aranjare invitați la mese',
    description: 'Drag & drop simplu, export PDF și partajare.'
  },
  {
    icon: '📲',
    title: 'Trimitere SMS invitați',
    description: 'Trimite linkuri, mesaje și confirmări automate.'
  }
];

const ServiceOverview = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Serviciile noastre</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceOverview;
