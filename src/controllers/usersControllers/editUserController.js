const editUserService = require("../../services/usersServices/editUserService");

const editUserController = (req, res) => {
  const user = req.body;

  editUserService(user, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    console.log(`Edicion de usuario completada`)
    res
    
      .status(200)
      .json({ message: "Usuario editado exitosamente.", result });
  });
  
};

module.exports = editUserController;
