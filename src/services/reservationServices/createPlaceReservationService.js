const createPlaceReservationModel = require('../../models/reservationModels/createPlaceReservationModel');

const createPlaceReservationService = async (reservationData) => {
    // Aquí puedes agregar validaciones adicionales si es necesario
    return await createPlaceReservationModel(reservationData);
};

module.exports = createPlaceReservationService;