const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { authenticateToken } = require('../utilities/authToken')
require('dotenv').config()

router.post('user/profile/add',authenticateToken, ( req, res) => {
    res.status(200).json({ message: 'Profile updated' })
    })
router.get('user/profile', authenticateToken, ( req, res) => {
    res.status(200).json({ message: 'Profile viewed!' })
    })    
router.post('user/register', ( req, res) => {
    res.status(201).json({ message: 'Successfull registration' })
    })
router.post('user/login', ( req, res) => {
    const username ='vimbi'
    const password = '123456789'
    const {userName, passWord} = req.body
    if (username == userName && password == passWord){ 
        const user = {username, password}
        const token = jwt.sign(user, process.env.SECRET_TOKEN)
        res.status(200).json({ message: 'Login successful', token: token })
    } else{
         res.status(401).json({ message: 'Invalid credentials' })
          }
    })

module.exports = router;    