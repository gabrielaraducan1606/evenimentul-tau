import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/users/register', { email, password });
      localStorage.setItem('authToken', res.data.token);
      alert('Cont creat cu succes!');
      navigate('/profil');
    } catch (err) {
      alert(err.response?.data?.msg || 'Eroare la înregistrare');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Creare Cont</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Parolă" required />
      <button type="submit">Creează cont</button>
    </form>
  );
};

export default RegisterForm;
