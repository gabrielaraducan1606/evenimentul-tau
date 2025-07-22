const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [
    {
      id: String,
      title: String,
      price: String,
      image: String,
      quantity: Number
    }
  ],
  favorites: [
    {
      id: String,
      title: String,
      price: String,
      image: String
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
