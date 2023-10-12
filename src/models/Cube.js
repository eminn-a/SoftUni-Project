const mongoose = require("mongoose");

const cubeShema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number,
  accessories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Accessory",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Cube = mongoose.model("Cube", cubeShema);

module.exports = Cube;
