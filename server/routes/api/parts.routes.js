const router = require("express").Router();
const { Part } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    if (res.locals.user) {
      const parts = await Part.findAll();
      if (parts) {
        res.json(parts);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/add", async (req, res) => {
  try {
    if (res.locals.user && res.locals.user.isAdmin === true) {
      const part = await Part.create(req.body);
      res.json(part);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
