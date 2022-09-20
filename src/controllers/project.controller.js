const projectService = require("../services/project.service");

const getProjects = async (req, res) => {
  try {
    const { filter } = req.body;
    const projects = await projectService.getProject(filter);
    res.send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addProject = async (req, res) => {
  try {
    const { newProject } = req.body;
    const addedProject = await projectService.addProject(newProject);
    res.send(addedProject);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProject = async (req, res) => {
  try {
    const { updatedProject } = req.body;
    const project = await projectService.updateProject(updatedProject);
    res.send(project);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getProjects,
  addProject,
  updateProject,
};
