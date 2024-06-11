const express = require("express");
const router = express.Router();
const createProductController = require("../../controllers/productControllers/createProductController");

router.post("/product", createProductController);

module.exports = router;
