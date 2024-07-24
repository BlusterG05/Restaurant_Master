const deleteUserService = require("../../services/usersServices/deleteUserService");

const deleteUserController = (req, res) => {
  const { user_ced } = req.params;
  const { password } = req.body;

  if (!user_ced || !password) {
    return res
      .status(400)
      .json({ error: "El ID del usuario y la contraseña son requeridos." });
  }

  deleteUserService(user_ced, password, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res
      .status(200)
      .json({ message: "Usuario eliminado exitosamente.", result });
  });
};

module.exports = deleteUserController;
