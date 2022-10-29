const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");
const {streamSwitch} = require('./adminPanel/switching.js');
const {sessionSchema} = require('../database/schemas.js');
const Session = mongoose.model("Session", sessionSchema);


const User = mongoose.model("User", userSchema);

async function StartServer(req, res){
    var timerDuration;
    const promise = await Session.findOne({User: "Admin"})
    .then(function(foundUser){
        const timer = foundUser.Duration;
        timerDuration = timer*60*1000;
    });
    console.log(timerDuration);
    console.log("Timer Started");
    setInterval(function() {
        res.send('Timer Ended');
    },timerDuration);
    }

module.exports = StartServer;