const createProductModel = require("../../models/productsModels/createProductModel");

const createProductService = (
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
  createProductModel(
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

module.exports = createProductService;
