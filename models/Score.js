const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

var ScoreSchema = new mongoose.Schema({
    objectId    : ObjectId,
    username    : String,
    score       : Number,
    date        : Date
});

module.exports = mongoose.model("Score",ScoreSchema);