const express = require('express')
const router = express.Router()

const todos = []
router.get('/todos', (req, res) =>{
    res.json(todos)
})

router.post('/todos', (req, res) =>{
    try{
        const task = req.body
    if(task){
        res.json({ message: 'Task Posted', task: task })

    } else{
        console.log('No task entered')

    }
    } catch(error) {
        console.error(error);
        res.send("error posting")
    }
})
