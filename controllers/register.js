const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");
const {mail} = require("../nodemailer/nodemailer");
const {streamSwitchSchema} = require('../database/schemas.js');

const StreamSwitch = mongoose.model("StreamSwitch", streamSwitchSchema);

const User = mongoose.model("User", userSchema);

async function register(req, res){
    console.log("inside register function");
    const email = req.body.Email;
    User.findOne({ Email: email }, function (err, foundUser) {
        if(!foundUser){
            console.log("User not found");
            const newUser = new User(req.body);
            console.log(req.body.RegisterDate);
            newUser.save(async function(errors){
                if(errors) {
                    console.log(errors);
                    const message="failed";
                    const responseData ={
                        Message: message
                    };
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
                }
                else if(!errors) {
                    console.log("Login Success");
                    var message="";
                    const promise2 = await StreamSwitch.findOne({User: "Admin"})
                    .then(function(foundUser){
                        console.log(foundUser.Stream);
                        if(foundUser.Stream === "ON"){
                            message="Success";
                        }
                        else{
                            message = "Stream Not Available(Budget Exceeded)";
                        }
                    });
                    const responseData ={
                        Message: message
                    };
                    mail("Sending Mail", req.body);
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
                }
            });
        }
        else if(foundUser) {
            console.log("User found");
            const jsonContent = JSON.stringify({
                Message: "Already Registered"
            });
            res.status(200).send(jsonContent);
        }
    })
    
}

module.exports = register;