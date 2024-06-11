const express = require("express");
const router = express.Router();
const editBusinessController = require("../../controllers/businessControllers/editBusinessController");

router.put("/business/:business_id", editBusinessController);

module.exports = router;
