const createBusinessService = require("../../services/businessesServices/createBussinessService");

const createBusinessController = (req, res) => {
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

  createBusinessService(
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
        .status(201)
        .json({ message: "Negocio creado exitosamente.", result });
    }
  );
};

module.exports = createBusinessController;
