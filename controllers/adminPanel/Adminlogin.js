const express = require('express');
const mongoose = require('mongoose');
const {Admin} = require('../../database/schemas.js');
 
async function Adminlogin(req, res){
      const admin =  await Admin.find();
     
   console.log(`i a in set admin ${admin}`)
    const username = req.body.AdminUserName;
    const password = req.body.AdminPassWord;
    console.log(`i am in adminlogin ${username + '' + password}`);
    if(!username || !password){
        return res.status(400).json({message:"Plz fill the dta"}).send();
    }
  
    const Adminlogin = await Admin.findOne({Username:username});
    if (Adminlogin){
        if(password===Adminlogin.Password){
            res.status(200).json({message:"user Signin Successsfully"}).send();

        }else{
            // res.status(400).json({error:"Invalid password"});
            res.status(400).json({message:"Invalid credential"}).send();
        }
    }else{
        // res.status(400).json({error:"no mail found"})
        res.status(400).json({error:"Invalid credential"}).send();
    }
    // Admin.findOne({Username: username}, function(err, foundAdmin){
    //     if(foundAdmin){
    //         console.log(` i am insetAdmin ${foundAdmin}`);
    //         const jsonContent = JSON.stringify({
    //             Message: "Admin Already Exists"
    //         });
    //         res.status(200).send(jsonContent);
    //     }
    //     else{
            
    // console.log(username+" " +password);
    //         const newAdmin = new Admin({
    //             Username: username,
    //             Password: password
    //         });
    //         console.log(newAdmin);
    //         newAdmin.save((err)=>{
    //             if(err){
    //                 console.log(err);
    //                 const jsonContent = JSON.stringify({
    //                     Message: "Some Error Occurred"
    //                 });
    //                 res.status(400).send(jsonContent);
    //             } else{
    //                 console.log("New Admin Added "+username);
    //                 const jsonContent = JSON.stringify({
    //                     Message: "New Admin Added"
    //                 });
    //                 res.status(200).send(jsonContent);
    //             }
    //         });
    //     }
    // });
}

module.exports = Adminlogin;