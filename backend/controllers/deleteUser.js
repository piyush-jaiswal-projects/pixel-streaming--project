const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");
const User = mongoose.model("User", userSchema);

async function deleteUser(req, res){
    console.log("inside deleteuser function");
    User.deleteOne({Email: req.body.Email},
    function(err, result){
        if(!err){
            console.log("User Deletion Success");
            res.cookie(`email`,``);
                    res.status(200).send();
        }
        else if(err){
            console.log("User Deletion Failed");
            console.log(err);
                    res.status(200).send();
        }
    });
    }

module.exports = deleteUser;