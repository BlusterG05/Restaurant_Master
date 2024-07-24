const addProductToMenuService = require("../../services/menusServices/add_product_to_menu");

const addProductToMenuController = (req, res) => {
  const { menu_id, product_id } = req.body;

  if (!menu_id || !product_id) {
    return res
      .status(400)
      .json({ error: "El ID del menú y el ID del producto son requeridos." });
  }

  addProductToMenuService(menu_id, product_id, (err, result) => {
    if (err) {
      console.log({error: err.message})
      return res.status(400).json({ error: err.message });
    }
    res
      .status(200)
      .json({
        message: "Producto añadido al menú exitosamente.",
        result,
      });
  });
};

module.exports = addProductToMenuController;
