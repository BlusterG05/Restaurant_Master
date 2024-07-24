const editBusinessModel = require("../../models/businessesModels/editBussinessModel");

const editBusinessService = (
  business_id,
  business_owner_ced,
  business_name,
  business_phone,
  business_mail,
  business_city_id,
  business_main_desc,
  business_desc,
  business_slogan,
  business_main_pic_url,
  business_portrait_pic,
  callback
) => {
  editBusinessModel(
    business_id,
    business_owner_ced,
    business_name,
    business_phone,
    business_mail,
    business_city_id,
    business_main_desc,
    business_desc,
    business_slogan,
    business_main_pic_url,
    business_portrait_pic,
    (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    }
  );
};

module.exports = editBusinessService;
