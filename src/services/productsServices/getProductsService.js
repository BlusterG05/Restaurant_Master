const db = require("../../db/config");

const getAllProductsWithDetails = (callback) => {
  const query = `CALL get_all_products_with_details()`;

  db.query(query, (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

module.exports = getAllProductsWithDetails;
