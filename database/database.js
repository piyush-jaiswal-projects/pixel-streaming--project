const mongoose = require("mongoose");
const uri = require('../server.js');

var userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Organization: String,
    Link: String,
    Code: String,
    RegisterDate: Date,
    Duration: Number,
    LoginCount: Number
});



// mongoose.connect(uri);

module.exports = userSchema;