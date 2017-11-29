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
  s.save(function(err){
  	if(err){
  		res.sendStatus(500);
  		res.send("Something went wrong.");
  		return;
  	}else{
  		res.sendStatus(200);
  		res.send("Test object sent to scores collection.");
  		return;
  	}
  });

  res.sendStatus(500);
  res.send("Something went wrong.");
  return;
});

apiRouter.get("/topScores", function (req, res) {
  Score.find().sort({score:-1}).limit(10).exec(function (err, result) {
    res.status(200).json({result : result});
  })
});

apiRouter.post("/submitScore", function (req, res) {
  var s = new Score();
  s.score = req.body.score;
  s.username = req.body.username;
  s.date = Date.now();
  s.category = req.body.category;
  s.difficulty = req.body.difficulty;
  s.save(function(err){
    if(err){
      res.sendStatus(500);
    }else{
      res.sendStatus(200);
    }
  });
});

module.exports = apiRouter;