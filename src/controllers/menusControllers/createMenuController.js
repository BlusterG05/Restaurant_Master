const createMenuService = require("../../services/menuServices/createMenuService");

const createMenuController = (req, res) => {
  const {
    business_id,
    menu_name,
    menu_desc,
    menu_main_pic_url,
    menu_portrait_pic_url,
    is_active,
    is_featured,
  } = req.body;

  createMenuService(
    business_id,
    menu_name,
    menu_desc,
    menu_main_pic_url,
    menu_portrait_pic_url,
    is_active,
    is_featured,
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res
        .status(201)
        .json({ message: "Menú creado exitosamente.", data: result });
    }
  );
};

module.exports = createMenuController;
