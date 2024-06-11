const getUsersModel = require("../../models/usersModels/getUsersModel");

const getUsersService = (callback) => {
  getUsersModel((err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = getUsersService;
