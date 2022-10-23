const { ObjectId } = require("mongodb");
const dbService = require("./db.service");

const collectionName = "role";

const getRoles = async () => {
  try {
    const collection = await dbService.getCollection(collectionName);
    const roles = await collection.find({}).toArray();
    return roles;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getRoles,
};
