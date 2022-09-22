
const nodemailer = require("nodemailer");

module.exports.mail= async (str,data) => {
    console.log(str);
    console.log(data);
    console.log("nod");
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
to:data.Email,
html: `Your Code is <b>${data.Code}</b>.Please use this code to signIn `,
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