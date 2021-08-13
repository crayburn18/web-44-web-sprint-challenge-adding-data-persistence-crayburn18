// build your `Project` model here

const db = require("../../data/dbConfig");

const getAll = async () => {
    const data = await db("projects");
    return data.map(project => {
        return {
            ...project, project_completed:
                Boolean(project.project_completed)
        }
    });
}

const getById = async (id) => {
    const data = await db("projects").
        where("project_id", id).first();

    return {
        ...data,
        project_completed:
            Boolean(data.project_completed)
    }
}

const addNewProject = async (project) => {
    const id = await db("projects").insert(project);
    return getById(id);
}

module.exports = {
    getAll,
    getById,
    addNewProject
}