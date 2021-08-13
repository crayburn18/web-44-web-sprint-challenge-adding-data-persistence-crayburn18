// build your `Task` model here

const db = require("../../data/dbConfig");

const getAll = async () => {
    const data = db("tasks as t")
    .join("projects as p", "t.project_id","p.project_id");
    

    return data;

}

const getById = async (id) => {
    const data = await db("tasks").where("task_id",id).first();
    return data;
}

const addNewTask = async (task) => {
    const id = await db("tasks").insert(task);
    return getById(id);
}

module.exports = {
    getAll,
    getById,
    addNewTask
}