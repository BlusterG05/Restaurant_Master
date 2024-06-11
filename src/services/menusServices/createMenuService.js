const createMenuModel = require("../../models/menuModels/createMenuModel");

const createMenuService = (
  business_id,
  menu_name,
  menu_desc,
  menu_main_pic_url,
  menu_portrait_pic_url,
  is_active,
  is_featured,
  callback
) => {
  createMenuModel(
    business_id,
    menu_name,
    menu_desc,
    menu_main_pic_url,
    menu_portrait_pic_url,
    is_active,
    is_featured,
    (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    }
  );
};

module.exports = createMenuService;
