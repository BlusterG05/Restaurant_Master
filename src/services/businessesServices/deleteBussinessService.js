const deleteBusinessModel = require("../../models/businessesModels/deleteBussinessModel");

const deleteBusinessService = (
  business_id,
  business_owner_ced,
  password,
  callback
) => {
  deleteBusinessModel(
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

module.exports = deleteBusinessService;
