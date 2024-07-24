const getAllBusinessesModel = require("../../models/businessesModels/getAllBussinessesModel");

const getAllBusinessesService = (callback) => {
  getAllBusinessesModel((err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = getAllBusinessesService;
