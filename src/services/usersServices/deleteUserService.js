const deleteUserModel = require("../../models/usersModels/deleteUserModel");

const deleteUserService = (user_ced, password, callback) => {
  if (!user_ced || !password) {
    return callback(
      new Error("El ID del usuario y la contraseña son requeridos.")
    );
  }

  deleteUserModel(user_ced, password, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = deleteUserService;
