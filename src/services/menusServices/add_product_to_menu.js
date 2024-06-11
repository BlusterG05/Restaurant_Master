const addProductToMenuModel = require("../../models/menuModels/addProductToMenuModel");

const addProductToMenuService = (menu_id, product_id, callback) => {
  addProductToMenuModel(menu_id, product_id, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = addProductToMenuService;
