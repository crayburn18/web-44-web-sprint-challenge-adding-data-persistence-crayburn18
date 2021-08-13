// build your `/api/tasks` router here

const express = require("express");
const tasks = require("./model");
const router = express.Router();

router.get("/",(req,res,next)=>{
    tasks.getAll()
    .then(allTasks => {
        res.status(200).json(allTasks.map(task=>{
            return {
                ...task,
                task_completed: Boolean(task.task_completed)
            }   
        }))
    })
    .catch(next);
})

router.post("/",(req,res,next)=>{
    tasks.addNewTask(req.body)
    .then(newTask=>{
        res.status(201).json({
            ...newTask,
            task_completed:Boolean(newTask.task_completed)
        })
    })
    .catch(next);
})

module.exports = router;
