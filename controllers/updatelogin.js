const express = require("express");
const mongoose = require("mongoose");
const User = require("../database/database.js");

async function updateLogin(req, res){
    console.log("updatelogin function started");

    User.find({Email:req.body.Email})
    .exec()
    .then(user =>{
        if (user.length < 1)
        {
            return res.status(401).json({
                msg:"No User Found"
            });
        }
        if(req.body.email === user[0].Email)
        {
            //using jwt tokens
            const token = jwt.sign({
                Email:user[0].Email, 
                Code:user[0].Code
            }, 'data have been stored', 
            { expiresIn:"24h" });

            //storing back info
            res.status(200).json({
                Email:user[0].Email, 
                Code:user[0].Code, 
                token:token
            })
            
        }
        else
        {
            return res.status(401).json({
                msg:"email matching failed"
            });
        }
    })
}

module.exports = updateLogin;