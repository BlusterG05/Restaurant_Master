const express = require('express')
const router = express.Router()

const getReservationDetailsController = require('../../controllers/reservationControllers/getReservationDetailsController')

router.get("/reservation/:reservation_id", getReservationDetailsController);

module.exports = router;