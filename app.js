const express = require('express')
const app = express()
const port = 8000

//implementing middleware
app.use(logging)
//allowed origins
//authorisation and authentication

//http status codes
app.get('/heartbeat',( req, res) => {
    res.status(200).json({ message: 'Hello API is working!' })
    })
app.post('/register', ( req, res) => {
    res.status(201).json({ message: 'Successfull registration' })
    })
app.post('/login', ( req, res) => {
    res.status(200).json({ message: 'Login successfull!' })
    })
app.put('/profile', ( req, res) => {
    res.status(200).json({ message: 'Profile updated' })
    })
app.get('/profile',( req, res) => {
    res.status(200).json({ message: 'Profile viewed!' })
    })
app.use((req, res) => {
    res.status(404).json({message: 'Not found'})
    })
function logging(req,res, next) {
    console.log("Log")
    next()
}

app.listen(port, () => console.log(`Server is listening on port ${port}!`))