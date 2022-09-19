const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");


const User = mongoose.model("User", userSchema);

async function getcode(req, res){
    console.log("inside getcode function");
    const email = req.body.Email;

        //checking if user already registered 
        User.findOne({ Email: email }, function (err, foundUser) {

            if (foundUser) {
                console.log(foundUser.Code);
                const responseData ={
                    Code: foundUser.Code,
                    Message: "Success"
                };
                const jsonContent = JSON.stringify(responseData);
                res.status(200).send(jsonContent);
            } else {
                message="failed";
                    const responseData ={
                        Message: message
                    };
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
            }
        });
    }
    

module.exports = getcode;