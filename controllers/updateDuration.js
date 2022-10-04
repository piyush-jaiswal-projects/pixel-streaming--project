const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");
const User = mongoose.model("User", userSchema);
// const {mail} =require("../nodemailer/nodemailer.js");

const {mail} =require("../nodemailer/nodemailer2.js");

async function updateDuration(req, res){
    console.log("inside updateDuration function");
    console.log(req.body);
    User.updateOne({Email: req.body.Email},{
        $set: {
            Duration: req.body.Duration
        }
       
    },
    function(err, result){
        if(!err){
            mail("UpdateDuration", req.body.Email, req.body.Duration.Minutes, req.body.Duration.Seconds)
            message="Success"; 
                    const responseData ={
                        Message: message
                    };
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
                    console.log("Duration Update Success");
                    
        }
        else if(err){
            console.log("Duration Update Failed");
            console.log(err);
            message="failed";
                    const responseData ={
                        Message: message
                    };
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
        }
    });
    }

module.exports = updateDuration;