const getBusinessUser = require('../../models/usersModels/loginModel')

const getBusinessUserService = async (email) => {

    try{
        const businessOwner = await getBusinessUser(email);
        return businessOwner;
    }catch (err){
        throw new Error ('Service error: '+err.message);
    }
};

module.exports = getBusinessUserService;