const express = require("express");
const router = express.Router();
const editProductController = require("../../controllers/productsControllers/editProductController");

router.put("/product/:product_id", editProductController);

module.exports = router;
