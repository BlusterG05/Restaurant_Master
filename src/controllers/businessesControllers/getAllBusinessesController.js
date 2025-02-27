const getAllBusinessesService = require("../../services/businessesServices/getAllBussinessesService");

const getAllBusinessesController = (req, res) => {
  getAllBusinessesService((err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json({ result });
  });
};

module.exports = getAllBusinessesController;
