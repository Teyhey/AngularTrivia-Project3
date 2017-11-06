const express = require("express");

const Score = require("../models/Score.js");

const apiRouter = express.Router();

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

module.exports = apiRouter;