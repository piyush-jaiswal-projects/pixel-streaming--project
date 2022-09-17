const mongoose = require("mongoose");
const uri = require('../server.js');

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

const MyModel = mongoose.model('ModelName', userSchema);

const instance = new MyModel();
instance.my.key = 'hello';
instance.save(function (err) {
  //
});

// //if above thing doesnt work
// const conn = mongoose.createConnection(uri);
// const MyModel = mongoose.model('ModelName', userSchema);
// const m = new MyModel;
// m.save(); 


const main = async () => {
    //connecting database url
    await mongoose.connect(uri);  
}

main();



module.exports = {
    userSchema, 
    MyModel

  };