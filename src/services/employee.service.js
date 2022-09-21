const dbService = require("./db.service");

const collectionName = "employee";

const getEmployees = async (filter) => {
    const collection = await dbService.getCollection(collectionName)
};

const updateEmployee = async (updatedEmployee) => {};

module.exports = { getEmployees, updateEmployee };
