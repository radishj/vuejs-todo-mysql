var express = require("express")
var router = express.Router()
const Task = require("../model/Task")

//Get All Tasks
router.get("/tasks",(req, res)=>{
    Task.findAll()
        .then(tasks => {
            res.send(tasks)
        })
        .catch(err => {
            res.send("error: " + err)
        })
})

//Add task
router.post("/task", (req, res) => {
    console.log(req.body);
    if(!req.body.task_name){
        res.status(400)
        res.json({
            error: "Bad Data1"
        })
    }else{
        Task.create(req.body)
        .then(() =>{
            res.send("Task Add")
        })
        .catch(err => {
            res.send("Error: " + err)
        })
    }
})

module.exports = router