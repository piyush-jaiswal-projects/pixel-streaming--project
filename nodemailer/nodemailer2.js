const express = require("express");
const cron = require('node-cron');
const mongoose = require("mongoose");


const nodemailer = require("nodemailer");
const {Admin} = require('../database/schemas.js');
const {CampaignDuration} = require('../database/schemas.js');
const {DailyDuration} = require('../database/schemas.js');

module.exports.mail= async (str,data, minutes, seconds) => {
  console.log("calling after 2hr");
  const admin=  await Admin.find();
  console.log("i am in admin2")
  
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
   
    console.log(maillist);

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: "587",
    auth: {
      user: "Anirudh465@outlook.com",
      pass: "Anirudh25@",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
from:"Anirudh465@outlook.com",
to:maillist,
html: `<b>Total Stream Budget: ${totalBudget} minutes<br> 
Total Minutes Used in entire campaign: ${totalMinutesUsed} minutes<br>
Total Minutes Used in last 24 hrs: ${totalMinutesusedtoday}</b>`,
  };
 
 transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
  // Send Email
  
};