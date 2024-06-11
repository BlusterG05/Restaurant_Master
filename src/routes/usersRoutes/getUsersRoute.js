const express = require("express");
const router = express.Router();
const getUsersController = require("../../controllers/usersControllers/getUsersController");

router.get("/users", getUsersController);

module.exports = router;
