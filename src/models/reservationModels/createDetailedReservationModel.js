const  query  = require('../../db/promise_config');

const createDetailedReservationModel = async (reservation) => {
    const {
        cedula, 
        cliente_id = null, 
        business_id, 
        reservation_date, 
        place_id, 
        reservation_value, 
        transaction_type, 
        transaction_number, 
        transaction_date,
        productos_list
    } = reservation;

    const sql = `
        CALL CreateReservationWithDetails(
        ?,
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ?, 
        ? );`;

    const params = [cedula, cliente_id, business_id, reservation_date, place_id, reservation_value, transaction_type, transaction_number, transaction_date, productos_list];

    try {
        const res = await query.query(sql, params);
        return res[0];
    } catch (error) {
        throw new Error(`Error creating reservation: ${error}`);
    }
};

module.exports = createDetailedReservationModel;
