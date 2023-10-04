const router = require("express").Router();

const homeController = require("./controllers/homeController");
const cubeController = require("../src/controllers/cubeController");
const accesoryController = require("../src/controllers/accessoryController");

router.use(homeController);
router.use("/cubes", cubeController);
router.use("/accessories", accesoryController);
router.use("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
