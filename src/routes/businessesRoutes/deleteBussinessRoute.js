const express = require("express");
const router = express.Router();
const deleteBusinessController = require("../../controllers/businessControllers/deleteBusinessController");

router.delete("/business/:business_id", deleteBusinessController);

module.exports = router;
