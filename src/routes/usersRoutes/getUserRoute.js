const express = require("express");
const router = express.Router();
const getUserController = require("../../controllers/usersControllers/getUserController");

router.get("/users/:user_ced", getUserController);

module.exports = router;
