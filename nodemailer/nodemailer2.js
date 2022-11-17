const express = require("express");
const cron = require('node-cron');
const mongoose = require("mongoose");
const userSchema = require("../database/database.js");


const nodemailer = require("nodemailer");
const {Admin} = require('../database/schemas.js');
const {campaignDurationSchema} = require('../database/schemas.js');
const {CampaignDuration} = require('../database/schemas.js');
const {DailyDuration} = require('../database/schemas.js');
const {dailyDurationSchema} = require('../database/schemas.js');

const dailyDuration = mongoose.model("DailyDuration", dailyDurationSchema);
const User = mongoose.model("User", userSchema);

module.exports.mail= async (str,data, minutes, seconds) => {
  const admin=  await Admin.find();
  
  var totalBudget, totalMinutesUsed, totalMinutesusedtoday;

  const promise = await CampaignDuration.findOne({User:"Admin"})
  .then(function(foundData){
    totalBudget = foundData.CampaignBudget;
});

const promise2 = await CampaignDuration.findOne({User:"Admin"})
  .then(function(foundData){
    // totalBudget = foundData.Budget;
    // total minutes used
    const durationsArray = foundData.CampaignSessions;
            var totalMinutes = 0;
            durationsArray.forEach((item)=>{
                totalMinutes += item;
            });

            totalMinutesUsed = ((totalMinutes)/60).toFixed(2);
});

const promise3 = await DailyDuration.findOne({User:"Admin"})
  .then(function(foundData){
    // totalBudget = foundData.CampaignBudget;
    // total minutes used today
    var durationsArray = [];
    durationsArray = foundData.TodaySessions;
    var totalMinutesUsedToday = 0;
            durationsArray.forEach((item)=>{
                totalMinutesUsedToday += item;
            });

            totalMinutesusedtoday = ((totalMinutesUsedToday)/60).toFixed(2);
});

console.log("Data: "+totalBudget+" "+totalMinutesUsed+" "+totalMinutesusedtoday);

    const total = await Admin.countDocuments({});
    var maillist=[total];         
     var n = total; 
    for(let i=0; i<n;i++){
      maillist[i]=admin[i].Username;

    }
   
    // console.log(maillist);

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: "587",
    auth: {
      user: "notimetowastedeveloper@outlook.com",
      pass: "#Notimetowaste123",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
from:"notimetowastedeveloper@outlook.com",
to:maillist,
subject: "<b>NoTimeToWaste - Summary <br><br> </b>", 
html: `
Total Stream Budget: <b>${totalBudget} minutes</b><br> 
Total Minutes Used in entire campaign: <b>${totalMinutesUsed} minutes</b><br>
Total Minutes Used in last 24 hrs:<b> ${totalMinutesusedtoday}</b>`,
  };
 
 transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});

const date = new Date();

dailyDuration.updateOne({User:"Admin"},{
  Date: date,
  TodaySessions: [0]
}, function(err){
  if(err){
    console.log(err);
  }
  else if(!err){
    console.log("Date Updated");
  }
});

// const registerDate = Date.parse(foundUser.RegisterDate);
//                 const todayDate = new Date().toISOString();
//                 var d1 = new Date(registerDate);
//                 var d2 = new Date(todayDate);
//                 var diff = d2 - d1;
//                 var dayCount = Math.trunc(diff / 86400e3);

// User.deleteMany({RegisterDate})
User.find({}, function(err, foundData){
  // console.log(foundData);
  var usersArray = foundData;
  const todayDate = new Date().toISOString();
  var d2 = new Date(todayDate);
  for(var i = 0; i<usersArray.length; i++){
    const registerDate = Date.parse(usersArray[i].RegisterDate);
    var d1 = new Date(registerDate);
    var diff = d2-d1;
    const dayCount = Math.trunc(diff / 86400e3);
    if(dayCount >= 7){
      console.log(dayCount);
      console.log(usersArray[i].Email);
      User.deleteOne({Email: usersArray[i].Email}, function(err){
        if(err) console.log(err);
        else console.log("1 user deleted");
      })
    }
  }
});

  
};