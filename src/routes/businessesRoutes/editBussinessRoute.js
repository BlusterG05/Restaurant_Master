const express = require("express");
const router = express.Router();
const editBusinessController = require("../../controllers/businessesControllers/editBussinessController");

router.put("/business/:business_id", editBusinessController);

module.exports = router;
