const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");

const User = mongoose.model("User", userSchema);

async function login(req, res){
    console.log("inside login function");
    const email = req.body.Email;
    const code = req.body.Code;
    var message = null;
    //ensuring no blank request
    if (code == null) {

        console.log(">> Attempt of unauthorized access detected.");
        res.status(401).send("<h2>Please enter username and password!</h2>");

    }
    else {

        //checking if user already registered 
        User.findOne({ Code: code }, function (err, foundUser) {

            if (foundUser) {
                    message="Success"; 
                    const responseData ={
                        Message: message,
                        RegisterDate: foundUser.RegisterDate,
                        Email: foundUser.Email,
                        LoginCount: foundUser.LoginCount,
                        Duration: foundUser.Duration
                    };
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
                    console.log(">> Login Success");

                
            } else {
                message="Invalid Code";
                    const responseData ={
                        Message: message
                    };
                    console.log(responseData);
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
            }
        });
    }
    }

module.exports = login;