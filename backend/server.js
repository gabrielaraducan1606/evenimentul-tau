const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

// Configurarea serverului
const app = express();
app.use(express.json());
app.use(cors());

// Conectarea la baza de date MongoDB
mongoose.connect('mongodb://localhost/evenimentul_tau', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Schema pentru utilizatori
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Ruta pentru crearea unui cont
app.post('/api/users/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'Emailul există deja!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ success: true, message: 'Cont creat cu succes!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Eroare la crearea contului!' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});
