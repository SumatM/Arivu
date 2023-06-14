const mongoose = require("mongoose");

//schema
const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    age: Number,
    city: String,
  },
  {
    versionKey: false,
  }
);

//model
const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
