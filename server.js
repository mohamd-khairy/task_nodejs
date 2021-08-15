const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

// var corsOptions = {
//   origin: "http://localhost:5001"
// };

// app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(process.env.port || 3000);