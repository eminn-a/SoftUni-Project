const Cube = require("../models/Cube");

const uniqId = require("uniqid");

exports.create = async (cubeData) => {
  const cube = new Cube(cubeData);
  await cube.save();
  return cube;
};

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.getAll = async (search, from, to) => {
  let result = await Cube.find().lean();
  //TODO: use mongoose to filter in the db
  if (search) {
    result = result.filter((x) =>
      x.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    result = result.filter((x) => x.difficultyLevel >= Number(from));
  }
  if (to) {
    result = result.filter((x) => x.difficultyLevel <= Number(to));
  }
  return result;
};

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.getOneWithAccessories = (cubeId) =>
  this.getOne(cubeId).populate("accessories");

exports.attachAccessory = async (cubeId, accessoryId) => {
  const cube = await Cube.findById(cubeId);
  cube.accessories.push(accessoryId);

  return cube.save();
};
