const editProductModel = require("../../models/productsModels/editProductModel");

const editProductService = (
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
  editProductModel(
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
    (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    }
  );
};

module.exports = editProductService;
