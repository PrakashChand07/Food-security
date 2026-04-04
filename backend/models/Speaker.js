const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema({
  name: String,
  designation: String,
  image: String
});

module.exports = mongoose.model("Speaker", speakerSchema);
