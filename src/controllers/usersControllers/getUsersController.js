const getUsersService = require("../../services/usersServices/getUsersService");

const getUsersController = (req, res) => {
  getUsersService((err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    console.log(`Recuperando informacion`)
    res.status(200).json({ result });
  });
  
};

module.exports = getUsersController;
