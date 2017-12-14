const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

var UserSchema = new mongoose.Schema({
    objectId    : ObjectId,
    username    : String,
    password    : String
});

module.exports = mongoose.model("User",UserSchema);