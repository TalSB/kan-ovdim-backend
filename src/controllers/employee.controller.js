const employeeService = require("../services/employee.service");

const getEmployees = async (req, res) => {
  try {
    const { filter } = req.body;
    const employees = await employeeService.getEmployees(filter);
    res.json(employees);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { updatedEmployee } = req.body;
    const employee = await employeeService.updateEmployee(updatedEmployee);
    res.json(employee);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getEmployees, updateEmployee };
