const express = require("express");
const { getProjects } = require("../controllers/project.controller");

const router = express.Router();

// router.post("/login", login);
// router.post("/signup", signup);
// router.post("/logout", logout);
// router.post("/googleLogin", googleLogin);
// router.get("/loggedinUser", getLoggedinUser);

router.get("/", getProjects);

module.exports = router;
