const mongoose = require("mongoose");
const uri = require('../server.js');

var userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Organization: String,
    Link: String,
    Code: String,
    RegisterDate: Date,
    Duration: {
        Minutes: Number,
        Seconds: Number
    },
    LoginCount: Number,
    Teacher: Boolean
});



// mongoose.connect(uri);

module.exports = userSchema;