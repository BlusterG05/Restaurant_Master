const db = require("../../db/config");

const getAllBusinesses = (callback) => {
  const query = `CALL get_all_businesses()`;

  db.query(query, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results[0]);
  });
};

module.exports = getAllBusinesses;
