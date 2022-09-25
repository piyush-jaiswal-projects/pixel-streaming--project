const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");


const User = mongoose.model("User", userSchema);

async function Checkuser(req, res){
    console.log("inside checkuser function");
    const email = req.body.Email;
    User.findOne({ Email: email }, function (err, foundUser) {
        if(!foundUser){
            console.log("User not found");
            const jsonContent = JSON.stringify({
                Message: "No"
            });
            res.status(200).send(jsonContent);
        }
        else if(foundUser) {
            console.log("User found");
            const jsonContent = JSON.stringify({
                Message: "Success"
            });
            res.status(200).send(jsonContent);
        }
    })
    
}

module.exports = Checkuser;