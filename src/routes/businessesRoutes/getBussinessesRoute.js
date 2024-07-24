const express = require("express");
const router = express.Router();
const getAllBusinessesController = require("../../controllers/businessesControllers/getAllBusinessesController");

router.get("/businesses", getAllBusinessesController);

module.exports = router;
