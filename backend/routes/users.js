const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI)

const schemaone = mongoose.Schema({
  name: String,
  surname: String
});

module.exports = mongoose.model("collection1", schemaone)