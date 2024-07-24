const createUserService = require("../../services/usersServices/createUserService");

const createUserController = (req, res) => {
  const user = req.body;

  createUserService(user, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    console.log(`Usuario creado : ${req.body.user_name}`)
    res
      .status(201)
      .json({ message: "Usuario creado exitosamente.", result });
  },
  
);
  
};

module.exports = createUserController;
