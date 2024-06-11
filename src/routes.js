const express = require("express");
const router = express.Router();

const createUserRoute = require("./routes/usersRoutes/createUserRoute");
const editUserRoute = require("./routes/usersRoutes/editUserRoute");
const deleteUserRoute = require("./routes/usersRoutes/deleteUserRoute");
const getUsersRoute = require("./routes/usersRoutes/getUsersRoute");
const getUserRoute = require("./routes/usersRoutes/getUserRoute");

const createBusinessRoute = require("./routes/businessesRoutes/createBusinessRoute");
const editBusinessRoute = require("./routes/businessesRoutes/editBusinessRoute");
const deleteBusinessRoute = require("./routes/businessesRoutes/deleteBusinessRoute");
const getBusinessesRoute = require("./routes/businessesRoutes/getBusinessesRoute");

const createProductRoute = require("./routes/productsRoutes/createProductRoute");
const editProductRoute = require("./routes/productsRoutes/editProductRoute");
const deleteProductRoute = require("./routes/productsRoutes/deleteProductRoute");
const getProductsRoute = require("./routes/productsRoutes/getProductsRoute");

const createMenuRoute = require("./routes/menuRoutes/createMenuRoute");
const addProductToMenuRoute = require("./routes/menuRoutes/addProductToMenuRoute");


router.use("/v1", createUserRoute);
router.use("/v1", editUserRoute);
router.use("/v1", deleteUserRoute);
router.use("/v1", getUsersRoute);
router.use("/v1", getUserRoute);


router.use("/v1", createBusinessRoute);
router.use("/v1", editBusinessRoute);
router.use("/v1", deleteBusinessRoute);
router.use("/v1", getBusinessesRoute);

router.use("/v1", createProductRoute);
router.use("/v1", editProductRoute);
router.use("/v1", deleteProductRoute);
router.use("/v1", getProductsRoute);

router.use("/v1", createMenuRoute);
router.use("/v1", addProductToMenuRoute);


module.exports = router;
