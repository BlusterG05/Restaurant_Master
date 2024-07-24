const db = require("../../db/config");

const deleteUser = (user_ced, password, callback) => {
  const query = `CALL delete_user(?, ?)`;

  db.query(query, [user_ced, password], (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results[0]);
  });
};

module.exports = deleteUser;
