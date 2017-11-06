const express = require('express');
const app = express();

const apiRouter = express.Router();

const mongoose = require('mongoose');
 
mongoose.connect('mongodb://express:EXPRESS@ds243325.mlab.com:43325/cisc474');

const Score = require("./models/Score.js");

app.use("/api", apiRouter);

apiRouter.get("/", function (req, res) {
  res.send("api");
});

apiRouter.get("/test", function (req, res) {
  
  var s = new Score();
  s.score = 12;
  s.username = "testUser"
  s.date = Date.now();
  s.save();

  res.send("test object sent to scores collection");
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