const getUserService = require("../../services/usersServices/getUserService");

const getUserController = (req, res) => {
  const { user_ced } = req.params;

  getUserService(user_ced, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json({ data: result });
  });
};

module.exports = getUserController;
