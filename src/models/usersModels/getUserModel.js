const db = require("../../db/config");

const getUser = (user_ced, callback) => {
  const query = `CALL get_user(?)`;

  db.query(query, [user_ced], (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results[0]);
  });
};

module.exports = getUser;
