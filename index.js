const express = require("express");
const app = express();
app.use(express.json());

const projectRoutes = require("./src/routes/project.routes");
// const employeeRoutes = require("./src/routes/employee.routes");

app.use("/project", projectRoutes);
// app.use("/employee", employeeRoutes);

app.listen(3000);
