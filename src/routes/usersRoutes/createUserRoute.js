const express = require("express");
const router = express.Router();
const createUserController = require("../../controllers/usersControllers/createUserController");

router.post("/users", createUserController);

module.exports = router;
