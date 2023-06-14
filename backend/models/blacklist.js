const mongoose = require("mongoose");

//schema
const blackListSchema = mongoose.Schema(
  {
    blacklist: Array,
  },
  {
    versionKey: false,
  }
);

//model
const BlackListModel = mongoose.model("blacklist", blackListSchema);

module.exports = {
    BlackListModel,
};
