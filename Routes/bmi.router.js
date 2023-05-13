const express = require("express");
const bmiRouter = express.Router();
const { bmiModel } = require("../Model/bmi.model");

bmiRouter.post("/add", async (req, res) => {
  try {
    const bmi = bmiModel(req.body);
    await bmi.save();
    res.status(200).send({ bmi });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

bmiRouter.get("/", async (req, res) => {
  try {
    const bmi = await bmiModel.find({});
    res.status(200).send({ data: bmi });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = { bmiRouter };
