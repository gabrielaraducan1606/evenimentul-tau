import React, { useState } from 'react';
import axios from 'axios'; // Folosim axios pentru a face request-uri HTTP
import styles from './CreateAccount.module.css';

const CreateAccount = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', formData);
      if (response.data.success) {
        alert('Contul a fost creat cu succes!');
        onClose(); // Închidem formularul
      } else {
        alert('Eroare la crearea contului!');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      alert('A apărut o eroare!');
    }
  };

  return (
    <div className={styles.modal}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Crează un cont</h2>
        <div>
          <label htmlFor="name">Nume</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Parola</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Crează cont</button>
      </form>
      <button onClick={onClose} className={styles.closeButton}>Închide</button>
    </div>
  );
};

export default CreateAccount;
