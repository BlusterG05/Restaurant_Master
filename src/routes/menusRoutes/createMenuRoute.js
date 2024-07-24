const express = require("express");
const router = express.Router();
const createMenuController = require("../../controllers/menusControllers/createMenuController");

router.post("/menu", createMenuController);

module.exports = router;
