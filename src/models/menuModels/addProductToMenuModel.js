const db = require("../../db/config");

const addProductToMenu = (menu_id, product_id, callback) => {
  const query = `CALL add_product_to_menu(?, ?)`;

  db.query(query, [menu_id, product_id], (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

module.exports = addProductToMenu;
