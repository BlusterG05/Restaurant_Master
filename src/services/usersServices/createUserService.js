const createUserModel = require("../../models/usersModels/createUserModel");


const createUserService = (user, callback) => {
  // Validación de datos de entrada
  if (!user.user_ced || !user.user_name || !user.user_mail || !user.password) {
    return callback(
      new Error("Todos los campos requeridos no están completos.")
    );
  }

  createUserModel(user, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = createUserService;
