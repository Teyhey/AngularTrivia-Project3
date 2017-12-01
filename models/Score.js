const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

var ScoreSchema = new mongoose.Schema({
    objectId    : ObjectId,
    username    : String,
    score       : Number,
    date        : Date,
    category    : String,
    difficulty  : String
});

module.exports = mongoose.model("Score",ScoreSchema);