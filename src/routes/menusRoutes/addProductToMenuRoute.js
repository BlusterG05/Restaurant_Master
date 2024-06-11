const express = require("express");
const router = express.Router();
const addProductToMenuController = require("../../controllers/menuControllers/addProductToMenuController");

router.post("/menu/product", addProductToMenuController);

module.exports = router;
