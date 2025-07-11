const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.post('/profile/add', ( req, res) => {
    res.status(200).json({ message: 'Profile updated' })
    })
router.get('/profile',( req, res) => {
    res.status(200).json({ message: 'Profile viewed!' })
    })    
router.post('/register', ( req, res) => {
    res.status(201).json({ message: 'Successfull registration' })
    })
router.post('/login', ( req, res) => {
    const username ='vimbi'
    const password = '123456789'
    const {userName} = req.body.userName
    const {passWord} = req.body.passWord
    if (username == userName && password == passWord){ 
        res.status(401).json({ message: 'Invalid credentials' })
    } else{
        const user = {username, password}
            const token = jwt.sign(user, process.env.SECRET_TOKEN)
            res.status(200).json({ message: 'Login successful', token: token }) 
          }
    })

module.exports = router;    