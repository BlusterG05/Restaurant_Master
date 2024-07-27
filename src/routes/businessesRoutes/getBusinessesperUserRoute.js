const express = require("express")
const router = express.Router();
const getBusinessesperUserController = require('../../controllers/businessesControllers/getBusinessesperUserController')

router.get("/businesses/:user_id", getBusinessesperUserController);

module.exports = router;