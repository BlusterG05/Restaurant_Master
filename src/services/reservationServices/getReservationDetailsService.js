const getReservationDetailModel = require('../../models/reservationModels/getReservationDetailsModel');

const getReservationDetailService = async (reservation_id) => {
        try {
            const res = await getReservationDetailModel(reservation_id);
            return res
        } catch (error) {
            console.error('Error getting reservation details:', error.message);
        }
    };

module.exports = getReservationDetailService;