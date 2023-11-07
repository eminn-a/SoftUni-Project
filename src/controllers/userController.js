const router = require("express").Router();
const userManager = require("../manager/userManager");
const { extractErrorMessages } = require("../utils/errorHelpers");

router.get("/register", (req, res) => {
  res.render("users/registerPage");
});

router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;

  try {
    await userManager.register({ username, password, repeatPassword });
    res.redirect("/users/login");
  } catch (err) {
    const errorMessages = extractErrorMessages(err);
    console.log(errorMessages);
    res.render("users/registerPage", { errorMesages: errorMessages });
  }
});

router.get("/login", (req, res) => {
  res.render("users/loginPage");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await userManager.login(username, password);
    res.cookie("auth", token, { httpOnly: true });
    res.redirect("/");
  } catch (err) {
    const errorMessages = extractErrorMessages(err);
    console.log(errorMessages);
    res.render("users/loginPage", { errorMesages: errorMessages });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});

module.exports = router;
