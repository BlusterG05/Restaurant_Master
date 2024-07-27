const getBusinessModel = require('../../models/businessesModels/getBusinessModel')

const getBusinessService = (user_id, bussines_id) => {
    try {
        const res = getBusinessModel(user_id,bussines_id);
        return res;
    } catch(error){
        throw new Error('Service error', error.message);
    }

};
module.exports = getBusinessService;