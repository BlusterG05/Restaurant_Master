const editBusinessService = require("../../services/businessServices/editBusinessService");

const editBusinessController = (req, res) => {
  const { business_id } = req.params;
  const {
    business_owner_ced,
    business_name,
    business_phone,
    business_mail,
    business_city_id,
    business_main_desc,
    business_desc,
    business_slogan,
    business_main_pic_url,
    business_portrait_pic,
  } = req.body;

  editBusinessService(
    business_id,
    business_owner_ced,
    business_name,
    business_phone,
    business_mail,
    business_city_id,
    business_main_desc,
    business_desc,
    business_slogan,
    business_main_pic_url,
    business_portrait_pic,
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res
        .status(200)
        .json({ message: "Negocio editado exitosamente.", data: result });
    }
  );
};

module.exports = editBusinessController;
