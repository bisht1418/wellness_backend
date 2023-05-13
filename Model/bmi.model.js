const mongoose = require("mongoose");

const bmiSchema = mongoose.Schema(
  {
    bmi: { type: Number },
    sleep: { type: String },
    water: { type: String },
    meals: { type: String },
    exercise: { type: String },
    meditation: { type: String },
    work: { type: String },
    social: { type: String },
  },
  {
    versionKey: false,
  }
);
const bmiModel = mongoose.model("bmi", bmiSchema);

module.exports = { bmiModel };
