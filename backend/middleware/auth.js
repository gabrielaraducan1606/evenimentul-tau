const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  
  if (!token) {
    return res.status(401).json({ success: false, message: 'Acces interzis!' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next(); // Continuăm execuția către ruta dorită
  } catch (err) {
    res.status(400).json({ success: false, message: 'Token invalid' });
  }
};

module.exports = auth;
