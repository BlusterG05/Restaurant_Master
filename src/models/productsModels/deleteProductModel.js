const db = require("../../db/config");

const deleteProduct = (
  product_id,
  business_id,
  business_owner_ced,
  password,
  callback
) => {
  const query = `CALL delete_product(?, ?, ?, ?)`;

  db.query(
    query,
    [product_id, business_id, business_owner_ced, password],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    }
  );
};

module.exports = deleteProduct;
