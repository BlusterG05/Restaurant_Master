const express = require("express");
const router = express.Router();
const createMenuController = require("../../controllers/menuControllers/createMenuController");

router.post("/menu", createMenuController);

module.exports = router;
