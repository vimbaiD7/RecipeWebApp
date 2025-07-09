const express = require('express')
const logging = require('./src/utilities/logger')
const authRoutes = require('./src/routes/auth')
const usersRoutes = require('./src/routes/users')
const recipeRoutes = require('./src/routes/recipes')

const cors = require('cors')
const app = express()
const port = 8000


app.use(logging)

const corsOptions = {
    origin: ['http://localhost','http://localhost:3000']
}
app.use(cors(corsOptions))


app.use(express.json())
app.use(authRoutes)
app.use(usersRoutes)
app.use(recipeRoutes)

app.get('/heartbeat',( req, res) => {
    res.status(200).json({ message: 'Hello API is working!' })
    })

app.use((req, res) => {
    res.status(404).json({message: 'Not found'})
    })

app.listen(port, () => console.log(`Server is listening on port ${port}!`))