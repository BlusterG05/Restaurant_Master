const express = require("express");

const loginController = require('../../controllers/usersControllers/loginController')

const router = express.Router();

router.post("/login", loginController);

module.exports = router;