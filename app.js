const express = require('express');
const app = express();

const apiRouter = express.Router();

var mongoose = require('mongoose');
 
mongoose.connect('mongodb://express:EXPRESS@ds243325.mlab.com:43325/cisc474');

app.use("/api", apiRouter);

apiRouter.get("/", function (req, res) {
  res.send("api");
});

apiRouter.post("/user", function (req, res) {
  res.send("users");
});

app.get('/', function (req, res) {
  res.send('Welcome!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});