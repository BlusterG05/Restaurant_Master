const {query} = require('../../db/promise_config');

const getBusinessperUser = async (user_id) => {
    const sql = `select * from businesses inner join city on businesses.business_city_id = city.city_id where business_owner_ced = ?;`;

    try {
        const res = await query(sql, [user_id])
        return res
    }catch(e){
        throw new Error ('Error getting Bussines :' , e.message);
    }
}

module.exports = getBusinessperUser;


const test = getBusinessperUser(1234567890);

// (async () => {
//     try {
//       const test = await getBusinessperUser(1234567890);
//       console.log(test);
//     } catch (error) {
//       console.error(error);
//     }
//   })();

