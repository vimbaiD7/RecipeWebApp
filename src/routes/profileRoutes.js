const express = require('express')
const router = express.Router()

router.put('/profile', ( req, res) => {
    res.status(200).json({ message: 'Profile updated' })
    })
router.get('/profile',( req, res) => {
    res.status(200).json({ message: 'Profile viewed!' })
    })    

module.exports = router;    