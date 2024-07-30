const db = require("../../db/config");
const bcrypt = require('bcryptjs');

const createUser = async (user, callback) => {
  try {
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `CALL create_user(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const defaultPlan = 'Freemium'
    db.query(
      query,
      [
        user_ced,
        user_name,
        user_phone,
        user_address,
        user_mail,
        defaultPlan,
        city_id,
        user_profile_pic_url,
        hashedPassword,
      ],
      (err, results) => {
        if (err) {
          return callback(err);
        }
        callback(null, results[0]);
      }
    );
  } catch (error) {
    callback(error);
  }
};

module.exports = createUser;