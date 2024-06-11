const express = require("express");
const router = express.Router();
const editProductController = require("../../controllers/productControllers/editProductController");

router.put("/product/:product_id", editProductController);

module.exports = router;
