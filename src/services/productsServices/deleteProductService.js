const deleteProductModel = require("../../models/productsModels/deleteProductModel");

const deleteProductService = (
  product_id,
  business_id,
  business_owner_ced,
  password,
  callback
) => {
  deleteProductModel(
    product_id,
    business_id,
    business_owner_ced,
    password,
    (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    }
  );
};

module.exports = deleteProductService;
