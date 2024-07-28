const  query  = require('../../db/promise_config');

const createPlaceReservationModel = async (reservation) => {
    const {
        cedula, 
        cliente_id = null, 
        business_id, 
        reservation_date, 
        place_id, 
        reservation_value, 
        transaction_type, 
        transaction_number, 
        transaction_date
    } = reservation;

    const sql = `
        CALL CreatePlaceReservation(?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const params = [cedula, cliente_id, business_id, reservation_date, place_id, reservation_value, transaction_type, transaction_number, transaction_date];

    try {
        const res = await query.query(sql, params);
        return res[0];
    } catch (error) {
        throw new Error(`Error creating reservation: ${error}`);
    }
};

module.exports = createPlaceReservationModel;


// const testCreateReservation = async () => {
//     const reservation = {
//         cedula: '1720955671',
//         cliente_id: null,
//         business_id: 1,
//         reservation_date: '2023-10-15 19:00:00',
//         place_id: 5,
//         reservation_value: 500,
//         transaction_type: 'deposit',
//         transaction_number: 'TRX123456',
//         transaction_date: '2023-09-01 10:00:00'
//     };

//     try {
//         const result = await createPlaceReservationModel(reservation);
//         console.log('Reservation created successfully:', result);
//     } catch (error) {
//         console.error('Error creating reservation:', error.message);
//     }
// };

// testCreateReservation();

