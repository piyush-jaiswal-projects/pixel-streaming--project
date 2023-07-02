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
            if(foundUser!=null){
                const registerDate = Date.parse(foundUser.RegisterDate);
                const todayDate = new Date().toISOString();
                var d1 = new Date(registerDate);
                var d2 = new Date(todayDate);
                var diff = d2 - d1;
                var dayCount = Math.trunc(diff / 86400e3);
                if(foundUser.LoginCount >= 10 || dayCount >= 7){
                    message="Login Limit Exceeded";
                }
                else if(foundUser.LoginCount < 10 && dayCount < 7){
                    const promise2 = await StreamSwitch.findOne({User: "admin"})
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
            }
            else{
                const responseData ={
                    Message: "Invalid Code"
                };
                const jsonContent = JSON.stringify(responseData);
                res.status(200).send(jsonContent);
            }

                // console.log(message);
                // const responseData ={
                //     Email: foundUser.Email,
                //     LoginCount: foundUser.LoginCount,
                //     Message: message
                // };
                // const jsonContent = JSON.stringify(responseData);
                // res.status(200).send(jsonContent);
        });
    }
    

module.exports = getEmail;