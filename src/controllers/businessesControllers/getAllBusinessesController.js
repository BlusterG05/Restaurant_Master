const getAllBusinessesService = require("../../services/businessServices/getAllBusinessesService");

const getAllBusinessesController = (req, res) => {
  getAllBusinessesService((err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json({ data: result });
  });
};

module.exports = getAllBusinessesController;
