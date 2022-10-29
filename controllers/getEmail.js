const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");
const {mail} =require("../nodemailer/nodemailer.js");
const {streamSwitchSchema} = require('../database/schemas.js');

const StreamSwitch = mongoose.model("StreamSwitch", streamSwitchSchema);

const User = mongoose.model("User", userSchema);

async function getEmail(req, res){
    console.log("inside getemail function");
    const code = req.body.Code;
    var message="Please try again later :(";
        //checking if user already registered 
        const promise = await User.findOne({ Code: code })
        .then(async function (foundUser) {
            console.log(foundUser);
                if(foundUser.LoginCount >= 10){
                    message="Login Limit Exceeded";
                }
                else{
                    const promise2 = await StreamSwitch.findOne({User: "Admin"})
                    .then(function(foundUser){
                        if(foundUser.Stream === "ON"){
                            message="OK";
                        }
                        else{
                            message = "Stream Not Available(Budget Exceeded)";
                        }
                    });
                }
                console.log(message);
                const responseData ={
                    Email: foundUser.Email,
                    LoginCount: foundUser.LoginCount,
                    Message: message
                };
                const jsonContent = JSON.stringify(responseData);
                res.status(200).send(jsonContent);
        });
    }
    

module.exports = getEmail;