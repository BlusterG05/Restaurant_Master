const deleteProductService = require("../../services/productsServices/deleteProductService");

const deleteProductController = (req, res) => {
  const { product_id } = req.params;
  const { business_id, business_owner_ced, password } = req.body;

  if (!product_id || !business_id || !business_owner_ced || !password) {
    return res
      .status(400)
      .json({
        error:
          "El ID del producto, ID del negocio, ID del propietario y la contraseña son requeridos.",
      });
  }

  deleteProductService(
    product_id,
    business_id,
    business_owner_ced,
    password,
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res
        .status(200)
        .json({ message: "Producto eliminado exitosamente.", data: result });
    }
  );
};

module.exports = deleteProductController;
