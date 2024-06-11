const getAllProductsWithDetailsService = require("../../services/productsServices/getAllProductsWithDetailsService");

const getAllProductsWithDetailsController = (req, res) => {
  getAllProductsWithDetailsService((err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json({ data: result });
  });
};

module.exports = getAllProductsWithDetailsController;
