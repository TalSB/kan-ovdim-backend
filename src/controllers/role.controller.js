const roleService = require("../services/role.service");

const getRoles = async (req, res) => {
  try {
    const roles = await roleService.getRoles();
    res.send(roles);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getRoles,
};
