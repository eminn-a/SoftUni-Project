const mongoose = require("mongoose");

const cubeShema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number,
});

const Cube = mongoose.model("Cube", cubeShema);

module.exports = Cube;
