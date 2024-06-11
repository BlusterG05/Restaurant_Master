const express = require("express");
const router = express.Router();
const editUserController = require("../../controllers/usersControllers/editUserController");

router.put("/users/:user_ced", editUserController);

module.exports = router;
