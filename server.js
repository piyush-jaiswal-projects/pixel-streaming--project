// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const {data} = require("./client/src/Components/AdminPortal/portal");
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const User = require("./database/database.js");
const Use = require("./database/schemas.js");
const cookieParser = require('cookie-parser');
const {mail} =require("./nodemailer/nodemailer2.js")
// Create a new express application named 'app'
const app = express();

dotenv.config(); 

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;
// const username = "webdevwork";
// const password = "webdevwork";
// const uri = "mongodb+srv://newpassword:newpassword@webdevwork.vqqw5cl.mongodb.net/?retryWrites=true&w=majority";
const db = "mongodb+srv://nt2wAdmin:notimetowastenew@notimetowaste.l93mp.mongodb.net/?retryWrites=true&w=majority";
// const db = "mongodb+srv://newpassword:newpassword@webdevwork.vqqw5cl.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db, err => {
        if(!err) console.log('Database Connected');
        else if(err) console.log(err);
    });

    // 86400000
   
setInterval(mail ,120000);
// setInterval(mail ,86400000);
// const uri = "mongodb+srv://webdevwork:newpassword@webdevwork.vqqw5cl.mongodb.net/?retryWrites=true&w=majority";
// const connectDB = async () => {
//     await mongoose.connect(uri)
//         .catch(function (error) {
//             console.log(`Unable to connect to the Mongo db  ${error} `);
//         });
// //...rest of code
// };  

// // use as a function        
// connectDB();


// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.db}`);
    next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

// Configure the CORs middleware
app.use(cors());

// Require Route
const api = require('./routes/routes');
const { response } = require('express');
// Configure app to use route
app.use('/', api);

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

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
    db
};