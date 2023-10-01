const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const routs = require("./routes");

const dbConnect = require("./config/dbConfig");

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(routs);

app.listen(PORT, () => console.log(`Server is runing on port ${PORT}...`));
