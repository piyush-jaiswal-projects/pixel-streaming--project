const express = require("express");
const mongoose = require("mongoose");
const User = require("../database/database.js");

async function login(req, res){
    console.log("inside login function");
    console.log(req.body);
    if(req.body.email && req.body.code){
        let user = await User.findOne(req.body).select("-code");
        if(user){
            res.send(user);
        }else{
            res.send({result: 'No User Found'});
        }
    }else{
        res.send({result: 'No User Found'});
    }
    }


module.exports = login;