const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    minLength: [5, "Username is too short"],
    match: [/^[A-Za-z0-9]+$/, "Username need to be alphanumeric"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],

    match: [/^[A-Za-z0-9]+$/, "Password is not like required"],
    minLength: [8, "Min length password 8 characters"],
  },
});

userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new Error("Passsword missmatch!");
  }
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
