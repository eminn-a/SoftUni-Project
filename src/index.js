const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");

const app = express();
const PORT = 5000;

//Express congig
expressConfig(app);

//Handlebars confing
handlebarsConfig(app);
//Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => console.log(`Server is runing on port ${PORT}...`));
