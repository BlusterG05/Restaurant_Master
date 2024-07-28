const express = require("express")

const router = express.Router()

const createReservationCotroller = require("../../controllers/reservationControllers/createReservationController");

router.post('/reservation', createReservationCotroller);

module.exports = router;