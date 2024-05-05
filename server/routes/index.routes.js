const express = require("express");
const router = express.Router();

const authRoutes = require("./api/auth.routes");
const carsRoutes = require("./api/cars.routes");
const partsRoutes = require("./api/parts.routes");

router.use("/api/auth", authRoutes);
router.use("/api/cars", carsRoutes);
router.use("/api/parts", partsRoutes);

module.exports = router;
