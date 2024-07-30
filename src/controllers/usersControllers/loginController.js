const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const getBusinessUserService = require('../../services/usersServices/loginService')
require('dotenv').config();

const loginController = async (req, res) => {
    const { Mail, Password } = req.body;

    try {
        const businessOwner = await getBusinessUserService(Mail);
        if (businessOwner && businessOwner.length > 0) {
            const hashedPassword = businessOwner[0].password;
            const match = await bcrypt.compare(Password, hashedPassword);
            if (match) {
                const token = jwt.sign(
                    {
                        id: businessOwner[0].user_ced,
                        user_name: businessOwner[0].user_name,
                        user_mail: businessOwner[0].user_mail,
                        user_plan: businessOwner[0].user_plan
                    }, process.env.JWT_SECRET,
                    { expiresIn: '1h' }
                );

                res.status(200).json({ message: "Login succesfull!", token });
            } else {
                res.status(401).send('Invalid Password');
            }
        } else {
            res.status(401).send('User not found');
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = loginController;