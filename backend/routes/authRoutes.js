const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');
require('dotenv').config();

const router = express.Router();

// 🔐 Înregistrare
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'Emailul există deja!' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Eroare la înregistrare!' });
  }
});

// 🔐 Logare
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Email sau parolă incorectă!' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: 'Email sau parolă incorectă!' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      cart: user.cart || [],
      favorites: user.favorites || []
    });
  } catch (err) {
    res.status(500).json({ msg: 'Eroare la logare!' });
  }
});

// 🔑 Login prin token
router.post('/login-token', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'Utilizator inexistent' });

    res.json({
      cart: user.cart || [],
      favorites: user.favorites || []
    });
  } catch (err) {
    console.error('Eroare la login-token:', err);
    res.status(500).json({ msg: 'Eroare la preluarea datelor' });
  }
});

// 💾 Salvare date (cart + favorites)
router.post('/save-data', auth, async (req, res) => {
  const { cart, favorites } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        cart: cart || [],
        favorites: favorites || []
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ msg: 'Utilizatorul nu a fost găsit' });
    }

    res.json({ msg: 'Date salvate cu succes' });
  } catch (err) {
    console.error('❌ Eroare la salvarea datelor:', err);
    res.status(500).json({ msg: 'Eroare la salvarea datelor' });
  }
});

router.get('/profil', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'Utilizatorul nu a fost găsit' });
    }
    res.json(user);
  } catch (err) {
    console.error('❌ Eroare la obținerea profilului:', err);
    res.status(500).json({ msg: 'Eroare la obținerea profilului' });
  }
});

module.exports = router;
