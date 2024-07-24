const express = require("express");
const router = express.Router();
const createBusinessController = require("../../controllers/businessesControllers/createBussinessController");

router.post("/business", createBusinessController);

module.exports = router;
