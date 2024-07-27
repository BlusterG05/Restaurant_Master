const db = require("../../db/config");

const editBusiness = (
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
  const query = `CALL edit_business(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [
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
      //business_portrait_pic,
    ],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    }
  );
};

module.exports = editBusiness;
