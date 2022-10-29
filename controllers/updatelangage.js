const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");
const {streamSwitch} = require('./adminPanel/switching.js');

const User = mongoose.model("User", userSchema);

async function updatelanguage(req, res){
    console.log("inside updatelanguage function");
    console.log(req.body);
    User.updateOne({Email: req.body.Email},{
        $set: {
            LoginCount: req.body.Language
        }
    },
    function(err, result){
        if(!err){
            message="Success"; 
                    const responseData ={
                        Message: message
                    };
                    const jsonContent = JSON.stringify(responseData);
                    res.status(200).send(jsonContent);
                    console.log("LoginCount Update Success");
        }
        else if(err){
            console.log("LoginCount Update Failed");
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

module.exports = updatelanguage;