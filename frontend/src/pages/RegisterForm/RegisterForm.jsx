import React, { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');  // Adăugăm starea pentru nume
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/users/register', { name, email, password });
      localStorage.setItem('authToken', res.data.token);
      alert('Cont creat cu succes!');
      navigate('/profil');
    } catch (err) {
      alert(err.response?.data?.msg || 'Eroare la înregistrare');
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <form onSubmit={handleRegister} className={styles.form}>
          <h2>Creează cont nou</h2>
          <input
            type="text"
            placeholder="Nume"
            value={name}
            onChange={(e) => setName(e.target.value)}  // Gestionăm schimbarea numelui
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Parolă"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Înregistrare</button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
