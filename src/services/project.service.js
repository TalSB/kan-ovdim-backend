const { ObjectId } = require("mongodb");
const dbService = require("./db.service");

const collectionName = "project";

const getProjects = async (filter) => {
  try {
    const collection = await dbService.getCollection(collectionName);
    const projects = await collection.find({}).toArray();
    return projects;
  } catch (error) {
    throw error;
  }
};

const addProject = async (newProject) => {
  try {
    const collection = await dbService.getCollection(collectionName);
    const document = await collection.insertOne(newProject);
    const id = document.insertedId;
    const project = await collection.findOne({ _id: ObjectId(id) });
    return project;
  } catch (error) {
    throw error;
  }
};

const updateProject = async (updatedProject) => {
  try {
    const id = ObjectId(updatedProject._id);
    delete updatedProject._id;
    const collection = await dbService.getCollection(collectionName);
    const project = await collection.findOneAndUpdate({ _id: id }, { $set: { ...updatedProject } }, { returnDocument: "after" });
    return project.value;
  } catch (error) {
    throw error;
  }
};

module.exports = { getProjects, addProject, updateProject };
