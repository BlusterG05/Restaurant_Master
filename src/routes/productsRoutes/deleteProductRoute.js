const express = require("express");
const router = express.Router();
const deleteProductController = require("../../controllers/productsControllers/deleteProductController");

router.delete("/product/:product_id", deleteProductController);

module.exports = router;
