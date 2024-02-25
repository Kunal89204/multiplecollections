const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/mulitple")

const schematwo = mongoose.Schema({
  age: Number,
  gender: String
});

module.exports = mongoose.model("collection2", schematwo)