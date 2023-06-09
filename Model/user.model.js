const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    height: Number,
    weight: Number,
  },
  {
    versionKey: false,
  }
);

const userModel = model("users", userSchema);

module.exports = userModel;
