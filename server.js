const cors = require("cors");
const express = require("express");
const app = express();
const path = require('path')
const fs = require('fs');

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

const router = express.Router();


router.get("/files", function (request, response) {

  const directoryPath = __basedir + "/public/"

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: path.join(__dirname, '/public', file)
      });
    });

    res.status(200).send(fileInfos);
  });

});

app.listen(port);

