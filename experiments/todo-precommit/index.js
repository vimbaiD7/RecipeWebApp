const express = require('express')
const taskRoutes = require('./src/routes/tasks')

const port = 3000
const app = express()
app.use(express.json())

app.use(taskRoutes)
app.get('/home', (req, res) => {
    res.send('Hello, World!')
})
app.listen(port, () => console.log(`Server is listening on port ${port}!`))