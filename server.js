// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const User = require("./database/database.js");


// Create a new express application named 'app'
const app = express();

dotenv.config(); 

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;
const username = "webdevwork";
const password = "webdevwork";
const uri = "mongodb+srv://"+username+":"+password+"@webdevwork.vqqw5cl.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('Database Connected')
    });


// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configure the CORs middleware
app.use(cors());

// Require Route
const api = require('./routes/routes');
const { response } = require('express');
// Configure app to use route
app.use('/api/v1/', api);

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

//signup api
app.post('/signup', async (req, res) => {
    console.log("inside post funcnction");

    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
    let condition = await User.find(req.body).select("-email");
    if(condition){
        res.status({msg:"Already Registered"});
    } else{
        res.status({msg:"Success"});
    }
    
    
});

//login api
app.post('/login', async (req, res) => {
    console.log(req.body);
    if(req.body.email && req.body.code){
        let user = await User.findOne(req.body).select("-code");
        if(user){
            res.send(user);
        }else{
            res.send({result: 'No User Found'});
        }
    }else{
        res.send({result: 'No User Found'});
    }

    
});

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});


// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));

//exporting constant
module.exports = {
    uri
};