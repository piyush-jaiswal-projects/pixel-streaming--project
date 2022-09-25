const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");


const User = mongoose.model("User", userSchema);

async function StartServer(req, res){
    console.log("Timer Started");
    setInterval(function() {
        res.send('Timer Ended');
    },20000);
    res.status(200).send();
    }

module.exports = StartServer;