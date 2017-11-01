const express = require('express');
const app = express();

const apiRouter = express.Router();

app.use("/api", apiRouter);

apiRouter.get("/", function (req, res) {
  res.send("api");
});

app.get('/', function (req, res) {
  res.send('Welcome!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});