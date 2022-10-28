const express = require('express');
const mongoose = require('mongoose');
const {adminSchema} = require('../../database/schemas.js');

const Admin = mongoose.model("Admin", adminSchema);

async function setNewAdmin(req, res){
    const username = req.body.UserName;
    const password = req.body.PassWord;
    console.log(username+" " +password);
    Admin.findOne({Username: username}, function(err, foundAdmin){
        if(foundAdmin){
            console.log(` i am insetAdmin ${foundAdmin}`);
            const jsonContent = JSON.stringify({
                Message: "Admin Already Exists"
            });
            res.status(200).send(jsonContent);
        }
        else{
            
    console.log(username+" " +password);
            const newAdmin = new Admin({
                Username: username,
                Password: password
            });
            console.log(newAdmin);
            newAdmin.save((err)=>{
                if(err){
                    console.log(err);
                    const jsonContent = JSON.stringify({
                        Message: "Some Error Occurred"
                    });
                    res.status(400).send(jsonContent);
                } else{
                    console.log("New Admin Added "+username);
                    const jsonContent = JSON.stringify({
                        Message: "New Admin Added"
                    });
                    res.status(200).send(jsonContent);
                }
            });
        }
    });
}

module.exports = setNewAdmin;