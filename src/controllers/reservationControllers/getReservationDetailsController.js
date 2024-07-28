const getReservationDetailService = require('../../services/reservationServices/getReservationDetailsService');

const getReservationDetailsController = async (req, res) => {
    const { reservation_id } = req.params;

    if (!reservation_id) {
        return res.status(400).json({ message: 'Reservation ID is required' });
    }

    try {
        const reservationDetails = await getReservationDetailService(reservation_id);
        return res.status(200).json({ reservationDetails });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getReservationDetailsController;
