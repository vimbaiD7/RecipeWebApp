const express = require('express')
const router = express.Router()

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
    res.status(200).json({ message: 'Login successfull!' })
    })
module.exports = router;    