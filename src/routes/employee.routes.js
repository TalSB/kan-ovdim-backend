const express = require("express");
const employeeController = require("../controllers/employee.controller");

const router = express.Router();
router.get("/", employeeController.getEmployees);
router.post("/", employeeController.addEmployee);
router.put("/", employeeController.updateEmployee);
router.delete("/:employeeId", employeeController.deleteEmployee);

module.exports = router;
