const express = require("express");
const cron = require('node-cron');
const mongoose = require("mongoose");


const nodemailer = require("nodemailer");
const {Admin} = require('../database/schemas.js');
const {DailyDuration} = require('../database/schemas.js');
const {CampaignDuration} = require('../database/schemas.js');

module.exports.mail= async (str,data, minutes, seconds) => {
  console.log("calling after 2hr");
  const admin=  await Admin.find();
  const Dailyduration=  await DailyDuration.find();
  const Campaignduration=  await CampaignDuration.find();
  console.log("i am in admin2")
  const dailyduration= JSON.stringify(Dailyduration[0].DailyBudget);
  const campaignDuration= JSON.stringify(CampaignDuration[0].CampaignBudget);
    console.log(dailyduration);
    console.log(Campaignduration);
  //   console.log(data);
  //   console.log("nod");
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
html: `<b>User: ${data}<br> Watched Stream for ${dailyduration} minutes and ${campaignDuration} seconds</b>`,
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