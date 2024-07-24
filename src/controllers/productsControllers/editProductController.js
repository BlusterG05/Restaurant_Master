const editProductService = require("../../services/productsServices/editProductService");

const editProductController = (req, res) => {
  const { product_id } = req.params;
  const {
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
  } = req.body;

  editProductService(
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
        return res.status(400).json({ error: err.message });
      }
      res
        .status(200)
        .json({ message: "Producto editado exitosamente.", result });
    }
  );
};

module.exports = editProductController;
