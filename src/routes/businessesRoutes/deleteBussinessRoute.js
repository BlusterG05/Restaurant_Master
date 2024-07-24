const express = require("express");
const router = express.Router();
const deleteBusinessController = require("../../controllers/businessesControllers/deleteBussinessController");

router.delete("/business/:business_id", deleteBusinessController);

module.exports = router;
