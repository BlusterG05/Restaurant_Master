const db = require("../../db/config");

const editProduct = (
  product_id,
  business_id,
  product_name,
  product_description,
  base_price,
  product_price,
  category_id,
  availability,
  main_image_url,
  menu_portrait_pic_url,
  is_featured,
  callback
) => {
  const query = `CALL edit_product(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [
      product_id,
      business_id,
      product_name,
      product_description,
      base_price,
      product_price,
      category_id,
      availability,
      main_image_url,
      menu_portrait_pic_url,
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

module.exports = editProduct;
