const cors = require("cors");
const express = require("express");
const app = express();
const path = require('path')

let port = process.env.PORT || 5000;

global.__basedir = __dirname;

var corsOptions = {
  origin: "https://minlybe.herokuapp.com/"
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')))

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(port);

