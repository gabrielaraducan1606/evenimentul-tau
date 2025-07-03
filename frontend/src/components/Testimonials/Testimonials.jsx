import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Andreea & Vlad',
    event: 'Nuntă - 2024',
    message: 'Totul a fost impecabil! Invitațiile digitale au fost WOW, iar invitații au fost impresionați.',
  },
  {
    name: 'Marius',
    event: 'Botez băiețel',
    message: 'Mi-am aranjat invitații la mese în 10 minute. Foarte intuitiv și rapid!',
  },
  {
    name: 'Ioana P.',
    event: 'Aniversare 30 ani',
    message: 'Trusourile și mărturiile au fost superbe, exact cum le-am vrut. Mulțumesc pentru implicare!',
  }
];

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Ce spun clienții noștri</h2>
      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.message}>“{t.message}”</p>
            <div className={styles.name}>{t.name}</div>
            <div className={styles.event}>{t.event}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
