const { MongooseError, Error } = require("mongoose");

exports.extractErrorMessages = (err) => {
  if (error instanceof MongooseError) {
    return (errorMesages = Object.values(err.errors).map((x) => x.message));
  } else if (error) {
    return [error.message];
  }
};
