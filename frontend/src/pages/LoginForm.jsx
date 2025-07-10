import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/users/login', { email, password });
      localStorage.setItem('authToken', res.data.token);
      alert('Autentificare reușită!');
      navigate('/profil');
    } catch (err) {
      alert(err.response?.data?.msg || 'Eroare la logare');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Logare</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Parolă" required />
      <button type="submit">Autentificare</button>
    </form>
  );
};

export default Login;
