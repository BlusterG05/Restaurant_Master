const db = require("../../db/config");

const getUsers = (callback) => {
  const query = `CALL get_all_users()`;

  db.query(query, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

module.exports = getUsers;
