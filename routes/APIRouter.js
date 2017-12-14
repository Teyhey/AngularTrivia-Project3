//import { randomBytes } from "crypto";

const express = require("express");

const Score = require("../models/Score.js");
const User = require("../models/Score.js");

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

apiRouter.post("/auth/login", function (req, res) {
  //var u = new User();
  var un = req.body.username;
  var pw = req.body.password;

  //check database to see if user exists
  User.findOne({username: un, password: pw}, function (err, foundUser) {
    if (err) {
      res.sendStatus(500);
    }
    else if (foundUser) {
      // res.status(200);
      // res.setHeader('Content-Type', 'application/json');
      // res.json.token = "A token."
      // res.json.user = foundUser;

      res.json({
        response: 'a POST request for CREATING answers',
        question: req.params.qID,
        body: req.body
      });
    }
  });

  router.post('/:qID/answers', (req, res) => {
    res.json({
      response: 'a POST request for CREATING answers',
      question: req.params.qID,
      body: req.body
    });
  });
});

module.exports = apiRouter;