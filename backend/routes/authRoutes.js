const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profil', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      if (!user) return res.status(404).json({ msg: 'Utilizator inexistent' });
  
      res.json({ email: user.email });
    } catch (err) {
      res.status(500).json({ msg: 'Eroare server' });
    }
  });
module.exports = router;
