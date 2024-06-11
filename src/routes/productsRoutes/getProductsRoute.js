const express = require("express");
const router = express.Router();
const getAllProductsWithDetailsController = require("../../controllers/productControllers/getAllProductsWithDetailsController");

router.get("/products", getAllProductsWithDetailsController);

module.exports = router;
