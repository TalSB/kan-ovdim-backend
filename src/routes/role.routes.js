const express = require("express");
// const employeeController = require("../controllers/employee.controller");
const roleController = require("../controllers/role.controller");

const router = express.Router();
router.get("/", roleController.getRoles);

module.exports = router;
