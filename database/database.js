const mongoose = require("mongoose");

const Schema = mongoose.Schema;



var userSchema = new Schema({
    Name: String,
    Email: String,
    Organization: String,
    Link: String,
    Code: String,
    Date: Date,
    Duration: Number,
    LoginCount: Number
});



module.exports = {
    userSchema
  };