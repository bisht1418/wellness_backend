const express = require("express");
const app = express();
const connection = require("./db");

const { auth } = require("./Model/user.model");

const cors = require("cors");
require("dotenv").config();

//Import userRouter
const { userRouter } = require("./Routes/user.router");

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log("cannot connect to the db");
  }
  console.log("Port 8080 is running");
});
