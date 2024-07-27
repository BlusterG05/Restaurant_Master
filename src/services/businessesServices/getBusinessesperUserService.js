const getBusinessperUser = require('../../models/businessesModels/getBusinessesperUserModel')


const getBusinessesperUserService = async (user_id) => {

    try {
        const ownerBusinesses = getBusinessperUser(user_id);
        return ownerBusinesses;
    } catch (error) {
        throw new Error('Service Error', error.message)
    }

};

module.exports = getBusinessesperUserService;