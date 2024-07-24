const express = require("express");
const router = express.Router();
const createProductController = require("../../controllers/productsControllers/createProductController");

router.post("/product", createProductController);

module.exports = router;
