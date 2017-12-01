const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://express:EXPRESS@ds243325.mlab.com:43325/cisc474');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));   

const apiRouter = require("./routes/APIRouter.js");

app.use("/api", apiRouter);

app.get('/', function (req, res) {
  res.send('Welcome!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});