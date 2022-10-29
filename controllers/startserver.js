const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");
const {streamSwitch} = require('./adminPanel/switching.js');


const User = mongoose.model("User", userSchema);

async function StartServer(req, res){
    console.log("Timer Started");
    setInterval(function() {
        res.end('Timer Ended');
    },20000);
    }

module.exports = StartServer;