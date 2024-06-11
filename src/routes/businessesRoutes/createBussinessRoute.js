const express = require("express");
const router = express.Router();
const createBusinessController = require("../../controllers/businessControllers/createBusinessController");

router.post("/business", createBusinessController);

module.exports = router;
