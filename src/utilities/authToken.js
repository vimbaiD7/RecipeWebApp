const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
   console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({message: 'No token'});
}


    jwt.verify(token, process.env.SECRET_TOKEN, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = payload;
    next();
  });

} 

module.exports = {authenticateToken};