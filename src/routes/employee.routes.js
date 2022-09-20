const express = require("express");
const employeeController = require("../controllers/employee.controller");

const router = express.Router();

// router.post("/login", login);
// router.post("/signup", signup);
// router.post("/logout", logout);
// router.post("/googleLogin", googleLogin);
// router.get("/loggedinUser", getLoggedinUser);

router.get("/", employeeController.getEmployees);
router.put("/", employeeController.updateEmployee);

module.exports = router;
