const db = require("../../db/config");

const createMenu = (
  business_id,
  menu_name,
  menu_desc,
  menu_main_pic_url,
  menu_portrait_pic_url,
  is_active,
  is_featured,
  callback
) => {
  const query = `CALL create_menu(?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [
      business_id,
      menu_name,
      menu_desc,
      menu_main_pic_url,
      menu_portrait_pic_url,
      is_active,
      is_featured,
    ],
    (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    }
  );
};

module.exports = createMenu;
