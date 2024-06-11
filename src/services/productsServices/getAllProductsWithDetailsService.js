const getAllProductsWithDetailsModel = require("../../models/productsModels/getAllProductsWithDetailsModel");

const getAllProductsWithDetailsService = (callback) => {
  getAllProductsWithDetailsModel((err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = getAllProductsWithDetailsService;
