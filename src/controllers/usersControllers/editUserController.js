const editUserService = require("../../services/usersServices/editUserService");

const editUserController = (req, res) => {
  const user = req.body;

  editUserService(user, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res
      .status(200)
      .json({ message: "Usuario editado exitosamente.", data: result });
  });
};

module.exports = editUserController;
