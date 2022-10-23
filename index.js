const express = require("express");
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());

const projectRoutes = require("./src/routes/project.routes");
const employeeRoutes = require("./src/routes/employee.routes");
const roleRoutes = require("./src/routes/role.routes");
app.use("/project", projectRoutes);
app.use("/employee", employeeRoutes);
app.use("/role", roleRoutes);

app.listen(3005);
