const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/users.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`connected to db`);
    console.log(`connected to port ${process.env.port}`);
  } catch (error) {
    console.log(`error: ${error}`);
  }
});
