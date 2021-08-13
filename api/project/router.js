// build your `/api/projects` router here

  
const express = require("express");
const projects = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
    projects.getAll()
        .then(allProjects => {
            res.status(200).json(allProjects)
        })
        .catch(next);
})

router.post("/", (req, res, next) => {
    projects.addNewProject(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(next);
})


module.exports = router;
