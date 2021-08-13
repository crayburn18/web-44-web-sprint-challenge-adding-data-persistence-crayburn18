// build your `/api/resources` router here

const express = require("express");
const resource = require("./model");
const {
    validateResource
} = require("./middleware");

const router = express.Router();

router.get("/", (req, res, next) => {
    resource.getAll()
        .then(allResource => {
            res.status(200).json(allResource);
        })
        .catch(next);
})

router.post("/", validateResource, (req, res, next) => {
    resource.addResource(req.body)
        .then(newResource => {
            res.status(201).json(newResource);
        })
        .catch(next);
})


module.exports = router;
