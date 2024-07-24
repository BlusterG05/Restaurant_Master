const getUsersService = require("../../services/usersServices/getUsersService");

const getUsersController = (req, res) => {
  getUsersService((err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json({ result });
  });
};

module.exports = getUsersController;
