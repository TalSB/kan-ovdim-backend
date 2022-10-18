const express = require("express");
const projectController = require("../controllers/project.controller");

const router = express.Router();

// router.post("/login", login);
// router.post("/signup", signup);
// router.post("/logout", logout);
// router.post("/googleLogin", googleLogin);
// router.get("/loggedinUser", getLoggedinUser);

router.get("/", projectController.getProjects);
router.post("/", projectController.addProject);
router.put("/", projectController.updateProject);
router.delete("/:projectId", projectController.deleteProject);

module.exports = router;
