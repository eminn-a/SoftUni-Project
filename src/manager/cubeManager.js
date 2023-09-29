const uniqId = require("uniqid");

let cubes = [];

exports.create = (cubeData) => {
  const newCube = {
    id: uniqId(),
    ...cubeData,
  };
  cubes.push(newCube);
  //   console.log(cubes);
  return newCube;
};

exports.getAll = () => {
  return cubes.slice();
};
