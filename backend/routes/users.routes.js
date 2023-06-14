const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/users.models");

const userRouter = express.Router();

//registration
userRouter.post("/register", async (req, res) => {
  const { name, email, password, age, city, job } = req.body;
  const registeredUser = await UserModel.findOne({ email });

  if (registeredUser) {
    res.status(200).json({ msg: "User already exist. Please Login!!" });
  } else {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        // Store hash in your password DB.
        if (err) {
          res.status(402).json({ msg: err });
        } else {
          const user = new UserModel({
            name,
            email,
            password: hash,
            age,
            city,
            job,
          });
          await user.save();
          res.status(201).json({ msg: "user added succesfully" });
        }
      });
    } catch (error) {
      res.status(404).json({ error: error });
    }
  }
});

//get
userRouter.get("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        // result == true
        if (result) {
          res.status(200).json({ msg: "logged in " });
        } else {
          res.status(502).json({ msg: "invalid credentials" });
        }
      });
    } else {
      res.status(404).json({ msg: "user does not exit. Register first!!" });
    }
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

//updation
userRouter.post("/update", (req, res) => {});

//delete
userRouter.post("/delete", () => {});

module.exports = {
  userRouter,
};
