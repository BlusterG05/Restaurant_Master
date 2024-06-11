const createProductService = require("../../services/productsServices/createProductService");

const createProductController = (req, res) => {
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

  createProductService(
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
        .status(201)
        .json({ message: "Producto creado exitosamente.", data: result });
    }
  );
};

module.exports = createProductController;
