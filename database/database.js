const mongoose = require("mongoose");

const Schema = mongoose.Schema;



var userSchema = new Schema({
    Name: String,
    Email: String,
    Organization: String,
    Link: String,
    Code: String,
    Duration: Number,
    LoginCount: Number,
    DayCount: Number
});



module.exports = {
    userSchema
  };