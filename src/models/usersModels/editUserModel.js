const db = require("../../db/config");

const editUser = (user, callback) => {
  const {
    user_ced,
    user_name,
    user_phone,
    user_address,
    user_mail,
    user_plan,
    city_id,
    user_profile_pic_url,
    password,
    status,
    reset_token,
    reset_token_expiry,
  } = user;
  const query = `CALL edit_user(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [
      user_ced,
      user_name,
      user_phone,
      user_address,
      user_mail,
      user_plan,
      city_id,
      user_profile_pic_url,
      password,
      status,
      reset_token,
      reset_token_expiry,
    ],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results[0]);
    }
  );
};

module.exports = editUser;
