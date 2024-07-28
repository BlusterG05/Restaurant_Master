const createDetailedReservationModel = require('../../models/reservationModels/createDetailedReservationModel');

const createDetailedReservationService = async (reservationData) => {
    // Convertir el array de productos al formato requerido
    const productos_list = reservationData.products.map(p => `${p.product_id},${p.quantity}`).join(';');
    
    const detailedReservationData = {
        ...reservationData,
        productos_list
    };

    return await createDetailedReservationModel(detailedReservationData);
};

module.exports = createDetailedReservationService;