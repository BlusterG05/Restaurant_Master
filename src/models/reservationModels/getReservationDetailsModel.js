const query = require('../../db/promise_config');

const getReservationDetailsModel = async (reservation_id) => {
    const sql = `CALL GetReservationDetails(?);`;

    try {
        const res = await query.query(sql, [reservation_id]);
        return res;
    } catch (error) {
        throw new Error(`Can't get reservation detail: ${error.message}`);
    }
};

module.exports = getReservationDetailsModel;

// const testGetReservationDetail = async () => {
//     try {
//         const result = await getReservationDetailModel(12);
//         console.log('Reservation details:', result);
//     } catch (error) {
//         console.error('Error getting reservation details:', error.message);
//     }
// };

// testGetReservationDetail();