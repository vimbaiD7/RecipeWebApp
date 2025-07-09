const { request } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
    console.log(req)
  const authHeader = req['headers']['authorization']
  const token = authHeader.split(' ')[2]
  let localToken =  process.env.SECRET_TOKEN

  if (!token) {
    return res.status(401).json({message: 'No token'})
}


    if (token !== localToken){
         return res.status(403).json({message :'invalid token'})
        }
    next()

}

module.exports = {authenticateToken}