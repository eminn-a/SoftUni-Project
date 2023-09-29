let cubes = [];

exports.create = (cubeData) => {
  const newCube = {
    id: cubes.length + 1,
    ...cubeData,
  };
  cubes.push(newCube);
  //   console.log(cubes);
  return newCube;
};

exports.getAll = () => {
  return cubes.slice();
};
