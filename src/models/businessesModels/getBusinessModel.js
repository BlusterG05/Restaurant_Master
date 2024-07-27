const {query} = require('../../db/promise_config')

const getBusinessModel = async (user_id, business_id) => {
    if(!user_id || !business_id) {
        throw new Error('Need user and business ID')
    }

    const sql = `SELECT * FROM businesses INNER JOIN city ON businesses.business_city_id = city.city_id WHERE business_id = ? AND business_owner_ced = ?;`;

    try {
        const res = await query(sql, [business_id, user_id]);
        return res;
    } catch (error) {
        throw new Error('Something is wrong: ' + error.message);
    }
};

module.exports = getBusinessModel;

// // Test
// (async () => {
//     try {
//       const test = await getBusinessModel(1234567890, 1);
//       console.log(test);
//     } catch (error) {
//       console.error(error);
//     }
//   })();