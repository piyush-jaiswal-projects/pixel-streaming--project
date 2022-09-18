const express = require("express");
const mongoose = require("mongoose");
const User = require("../database/database.js");

async function register(req, res){
    console.log("inside register function");
    let user = new User(req.body);
    let result = await user.save();
    console.log(result);
    res.send(result);
    let condition = await User.find(req.body).select("-email");
    if(condition){
        res.status({msg:"Already Registered"});
    } else{
        res.status({msg:"Success"});
    }
}

module.exports = register;