const deleteBusinessService = require("../../services/businessesServices/deleteBussinessService");

const deleteBusinessController = (req, res) => {
  const { business_id } = req.params;
  const { business_owner_ced, password } = req.body;

  if (!business_id || !business_owner_ced || !password) {
    return res
      .status(400)
      .json({
        error:
          "El ID del negocio, ID del propietario y la contraseña son requeridos.",
      });
  }

  deleteBusinessService(
    business_id,
    business_owner_ced,
    password,
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res
        .status(200)
        .json({ message: "Negocio eliminado exitosamente.", result });
    }
  );
};

module.exports = deleteBusinessController;
