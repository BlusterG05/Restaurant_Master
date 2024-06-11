const getUserModel = require("../../models/usersModels/getUserModel");

const getUserService = (user_ced, callback) => {
  // Validación de datos de entrada
  if (!user_ced) {
    return callback(new Error("El ID del usuario es requerido."));
  }

  getUserModel(user_ced, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = getUserService;
