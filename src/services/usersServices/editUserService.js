const editUserModel = require("../../models/usersModels/editUserModel");

const editUserService = (user, callback) => {
  // Validación de datos de entrada
  if (!user.user_ced) {
    return callback(new Error("El ID del usuario es requerido."));
  }

  editUserModel(user, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = editUserService;
