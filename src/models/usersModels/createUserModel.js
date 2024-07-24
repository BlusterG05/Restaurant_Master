const db = require("../../db/config");

const createUser = (user, callback) => {
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
  } = user;
  const query = `CALL create_user(?, ?, ?, ?, ?, ?, ?, ?, ?)`;

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
    ],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results[0]);
    }
  );
};

module.exports = createUser;
