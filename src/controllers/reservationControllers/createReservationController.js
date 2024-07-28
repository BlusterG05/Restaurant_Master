const createPlaceReservationService = require('../../services/reservationServices/createPlaceReservationService');
const createDetailedReservationService = require('../../services/reservationServices/createDetailedReservationService');

const createReservation = async (req, res) => {
    try {
        const reservationData = req.body;
        let result;

        if (reservationData.reservationType === 'place') {
            result = await createPlaceReservationService(reservationData);
        } else if (reservationData.reservationType === 'detailed') {
            result = await createDetailedReservationService(reservationData);
        } else {
            return res.status(400).json({ error: 'Invalid reservation type' });
        }

        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = createReservation;