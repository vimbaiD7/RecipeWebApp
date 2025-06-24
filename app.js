const express = require('express')
const logging = require('./src/utilities/logger')
const authRoutes = require('./src/routes/authRoutes')
const profileRoutes = require('./src/routes/profileRoutes')

const cors = require('cors')
const app = express()
const port = 8000

//implementing middleware
app.use(logging)

//allowed origins/cors
const corsOptions = {
    origin: ['http://localhost','http://localhost:3000']
}
app.use(cors(corsOptions))
//authorisation and authentication

//routes
app.use(authRoutes)
app.use(profileRoutes)

app.get('/heartbeat',( req, res) => {
    res.status(200).json({ message: 'Hello API is working!' })
    })

app.use((req, res) => {
    res.status(404).json({message: 'Not found'})
    })

app.listen(port, () => console.log(`Server is listening on port ${port}!`))