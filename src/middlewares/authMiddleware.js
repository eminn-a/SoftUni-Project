const { SECRET } = require("../config/config");
const jwt = require("../lib/jwt");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];

  if (token) {
    try {
      const user = await jwt.verify(token, SECRET);

      req.user = user;
      res.locals.user = user;
      res.locals.isAuthenticated = true;

      next();
    } catch (err) {
      res.clearCookie("auth");
      res.redirect("/users/login");
    }
  } else {
    next();
  }
};

exports.isAuth = (req, res, next) => {
  if (!req.user) {
    return res.redirect("/users/login");
  }
  next();
};
