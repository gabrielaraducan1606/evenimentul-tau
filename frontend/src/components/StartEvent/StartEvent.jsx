import React, { useState } from 'react';
import styles from './StartEvent.module.css';

const StartEvent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: '',
    names: '',
    date: '',
    location: ''
  });

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <h1>✨ Simulează evenimentul tău</h1>

      {step === 1 && (
        <div className={styles.step}>
          <label>Ce tip de eveniment organizezi?</label>
          <select name="eventType" value={formData.eventType} onChange={handleChange}>
            <option value="">Selectează</option>
            <option value="nunta">Nuntă</option>
            <option value="botez">Botez</option>
            <option value="aniversare">Aniversare</option>
          </select>
          <button onClick={next}>Continuă ➔</button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.step}>
          <label>Numele principale (ex: Andreea & Vlad)</label>
          <input type="text" name="names" value={formData.names} onChange={handleChange} />
          
          <label>Data evenimentului</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />

          <label>Locația</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} />

          <div className={styles.navButtons}>
            <button onClick={prev}>← Înapoi</button>
            <button onClick={next}>Continuă ➔</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.preview}>
          <h2>💌 Previziune invitație</h2>
          <p>{formData.names}</p>
          <p>{formData.date}</p>
          <p>{formData.location}</p>
          <p>Tip eveniment: {formData.eventType}</p>

          <div className={styles.navButtons}>
            <button onClick={prev}>← Înapoi</button>
            <button onClick={() => alert('Simulare completă!')}>Finalizează</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartEvent;
