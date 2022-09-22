const ObjectId = require("mongodb").ObjectId;
const dbService = require("./db.service");

const collectionName = "employee";

const getEmployees = async (filter) => {
  try {
    const collection = await dbService.getCollection(collectionName);
    const employees = await collection.find({}).toArray();
    return employees;
  } catch (error) {
    throw error;
  }
};

const updateEmployee = async (updatedEmployee) => {
  try {
    const id = ObjectId(updatedEmployee._id);
    delete updatedEmployee._id;
    const collection = await dbService.getCollection(collectionName);
    const employee = await collection.findOneAndUpdate({ _id: id }, { $set: { ...updatedEmployee } }, { returnDocument: "after" });
    return employee.value;
  } catch (error) {
    throw error;
  }
};

module.exports = { getEmployees, updateEmployee };
