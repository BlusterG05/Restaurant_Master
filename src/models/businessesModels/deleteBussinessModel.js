const db = require("../../db/config");

const deleteBusiness = (
  business_id,
  business_owner_ced,
  password,
  callback
) => {
  const query = `CALL delete_business(?, ?, ?)`;

  db.query(
    query,
    [business_id, business_owner_ced, password],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    }
  );
};

module.exports = deleteBusiness;
