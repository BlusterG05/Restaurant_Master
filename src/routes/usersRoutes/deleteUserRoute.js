const express = require("express");
const router = express.Router();
const deleteUserController = require("../../controllers/usersControllers/deleteUserController");

router.delete("/users/:user_ced", deleteUserController);

module.exports = router;
