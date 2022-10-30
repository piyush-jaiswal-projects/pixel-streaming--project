const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const {Admin} = require('../database/schemas.js');

module.exports.mail= async (str,data, minutes, seconds) => {
  const admin=  await Admin.find();
  //   console.log(admin);
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
html: `<b>User: ${data}<br> Watched Stream for ${minutes} minutes and ${seconds} seconds</b>`,
  };

  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};