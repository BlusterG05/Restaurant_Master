const express = require("express")
const router = express.Router()

const getBusinessController = require("../../controllers/businessesControllers/getBusinessController")


router.get("/business/:user_id/:business_id", getBusinessController);

module.exports = router
