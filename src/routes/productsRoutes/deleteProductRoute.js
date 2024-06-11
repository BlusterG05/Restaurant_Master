const express = require("express");
const router = express.Router();
const deleteProductController = require("../../controllers/productControllers/deleteProductController");

router.delete("/product/:product_id", deleteProductController);

module.exports = router;
