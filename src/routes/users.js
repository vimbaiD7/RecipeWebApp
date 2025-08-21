const { supabase } = require('../config/supabaseClient')
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../utilities/authToken');
require('dotenv').config();

router.post('/user/profile/add', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Profile updated' });
});
router.get('/user/profile', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Profile viewed!' });
});
router.post('/user/register', async (req, res) => {
    const { email, password } = req.body;
    //console.log(req.body);
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });
    if (error) {
        return res.status(400).json({ error: error.message })
    } else {
        res.status(201).json({ message: 'Successfull registration', data });
    }
});
router.post('/user/login', async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) {
        return res.status(401).json({ error: error.message });
    } else {
        res.status(200).json({ message: 'Login successful', token: data.session.access_token, user: data.user });
    }
})

router.post('/user/otpSignIn', async (req, res) => {
    const { email } = req.body;
    const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            shouldCreateUser: false,
        }

    });
    if (error) {
        return res.status(401).json({ error: error.message });
    } else {
        res.status(200).json({ message: 'OTP sent to email', data });
    }
});

/*router.post('/user/verifyOtp', async (req, res) => {
    const { email, token } = req.body;
    const { data, error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'email'
    });
    if (error) {
        return res.status(401).json({ error: error.message });
    } else{
        res.status(200).json({ message: 'Verified OTP', data: data.user})
    }
});*/


 
module.exports = router;    