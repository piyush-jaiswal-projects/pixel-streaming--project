const mongoose = require("mongoose");
const link = require('./server.js');

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


const main = async () => {
    //connecting database url
    await mongoose.connect(link.uri);

    
    
}

main();



module.exports = {
    userSchema
  };