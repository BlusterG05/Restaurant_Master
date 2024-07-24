const getUserService = require("../../services/usersServices/getUserService");

const getUserController = (req, res) => {
  const { user_ced } = req.params;

  getUserService(user_ced, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    console.log(`Recuperando informacion de usuario: %d`, req.params.user_ced)
    res.status(200).json({ result });
  });
  
};

module.exports = getUserController;
