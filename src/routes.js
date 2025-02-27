const express = require("express");
const router = express.Router();
//user routes
const createUserRoute = require("./routes/usersRoutes/createUserRoute");
const editUserRoute = require("./routes/usersRoutes/editUserRoute");
const deleteUserRoute = require("./routes/usersRoutes/deleteUserRoute");
const getUsersRoute = require("./routes/usersRoutes/getUsersRoute");
const getUserRoute = require("./routes/usersRoutes/getUserRoute");
//bussines routes
const createBusinessRoute = require("./routes/businessesRoutes/createBussinessRoute");
const editBusinessRoute = require("./routes/businessesRoutes/editBussinessRoute");
const deleteBusinessRoute = require("./routes/businessesRoutes/deleteBussinessRoute");
const getBusinessesRoute = require("./routes/businessesRoutes/getBussinessesRoute");
const getBusinessesperUserRoute = require("./routes/businessesRoutes/getBusinessesperUserRoute");
const getBusinessRoute = require('./routes/businessesRoutes/getBusinessRoute')
//products routes
const createProductRoute = require("./routes/productsRoutes/createProductRoute");
const editProductRoute = require("./routes/productsRoutes/editProductRoute");
const deleteProductRoute = require("./routes/productsRoutes/deleteProductRoute");
const getProductsRoute = require("./routes/productsRoutes/getProductsRoute");
//reservation routes
const getReservationDetailRoute = require("./routes/reservationRoutes/getReservationDetailsRoute")
const createReservationRoute = require("./routes/reservationRoutes/createReservationRoute")
//menu routes
const createMenuRoute = require("./routes/menusRoutes/createMenuRoute");
const addProductToMenuRoute = require("./routes/menusRoutes/addProductToMenuRoute");
//login
const loginRoute = require("./routes/usersRoutes/loginRoute")
//middleware
const authenticateUser = require('./middlewares/authenticateUsers')

//unprotected routes

router.use("/v1", loginRoute);

router.use("/v1", createUserRoute);

router.use("/v1", getBusinessesRoute);

router.use("/v1", getProductsRoute);

//reservation unprotected
router.use("/v1", getReservationDetailRoute);
router.use("/v1", createReservationRoute);


// protected routes

router.use("/v1", authenticateUser, editUserRoute);
router.use("/v1", authenticateUser, deleteUserRoute);
router.use("/v1", authenticateUser, getUsersRoute);
router.use("/v1", authenticateUser, getUserRoute);


router.use("/v1", authenticateUser, createBusinessRoute);
router.use("/v1", authenticateUser, editBusinessRoute);
router.use("/v1", authenticateUser, deleteBusinessRoute);
router.use("/v1", authenticateUser, getBusinessesperUserRoute);
router.use("/v1", authenticateUser, getBusinessRoute)

router.use("/v1", authenticateUser, createProductRoute);
router.use("/v1", authenticateUser, editProductRoute);
router.use("/v1", authenticateUser, deleteProductRoute);

router.use("/v1", authenticateUser, createMenuRoute);
router.use("/v1", authenticateUser, addProductToMenuRoute);


module.exports = router;
