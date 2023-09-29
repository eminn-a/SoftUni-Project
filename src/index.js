const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const homeController = require("./controllers/homeController");
const cubeController = require("../src/controllers/cubeController");

const app = express();
const PORT = 5000;

//Express congig
expressConfig(app);
//Handlebars confing
handlebarsConfig(app);

//Routes
app.use(homeController);
app.use("/cubes", cubeController);

app.listen(PORT, () => console.log(`Server is runing on port ${PORT}...`));
