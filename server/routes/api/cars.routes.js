const router = require("express").Router();
const { Users_car } = require("../../db/models/");

router.get("/", async (req, res) => {
  const cars = await Users_car.findAll();
  res.json(cars);
});

module.exports = router;
