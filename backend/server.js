const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectat la MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Serverul rulează pe portul ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('❌ Eroare la conectare:', err));
