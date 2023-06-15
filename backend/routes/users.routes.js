const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/users.models");
const jwt = require("jsonwebtoken");
const { blacklist } = require("../blacklist");
const multer = require("multer");

const userRouter = express.Router();

//registration
userRouter.post("/register", async (req, res) => {
  const { name, email, password, age, city, job, image } = req.body;
  const registeredUser = await UserModel.findOne({ email });

  if (registeredUser) {
    res.status(200).json({ msg: "User already exist. Please Login!!" });
  } else {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        // Store hash in your password DB.
        if (err) {
          res.status(404).json({ msg: err });
        } else {
          const user = new UserModel({
            name,
            email,
            password: hash,
            age,
            city,
            job,
            image,
          });
          await user.save();
          res.status(201).json({ msg: "user created succesfully" });
        }
      });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
});

//get
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        // result == true
        const token = jwt.sign({ userId: user._id, user: user.name, }, "arivu", {
          expiresIn: "7d",
        });
        const rToken = jwt.sign(
          { userId: user._id, user: user.name },
          "ARIVU",
          {
            expiresIn: "24d",
          }
        );
        if (result) {
          res.status(202).json({ msg: "logged in ", token, rToken });
        } else {
          res.status(401).json({ msg: "invalid credentials" });
        }
      });
    } else {
      res.status(404).json({ msg: "user does not exit. Signup first!!" });
    }
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

//updation
userRouter.patch("/update/:userId", async (req, res) => {
  const { userId } = req.params;
  const payload = req.body;

  try {
    await UserModel.findByIdAndUpdate({ _id: userId }, payload);
    const user = await UserModel.find({ _id: userId });

    res.status(200).json({ msg: "user updated successfully", user });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});


//delete
userRouter.delete("/delete/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await UserModel.find({ _id: userId });
    await UserModel.findByIdAndDelete({ _id: userId });
    res
      .status(200)
      .json({ msg: "user has been deleted", deletedUser: deletedUser });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});


//logout
userRouter.get("/logout", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    blacklist.push(token);
    res.status(200).json({ msg: "The user has logged out" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// user course list 
userRouter.get('/userCourse/:userId', async(req,res)=>{
  try{
      const userId = req.params.userId;
      const user = await UserModel.findById({_id:userId}).populate('course')
      console.log(user.course,userId);
      res.status(200).json({course:user.course})
  }catch(err){
      res.status(400).json({message:'Something Went Wrong',error:err.message})
  }
})

module.exports = {
  userRouter,
};


