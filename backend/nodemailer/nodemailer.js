
const nodemailer = require("nodemailer");

module.exports.mail= async (str,data) => {
    console.log(str);
    console.log(data);
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: "587",
    auth: {
      user: "developerpiyush1610@outlook.com",
      pass: "developer@123",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
from:"developerpiyush1610@outlook.com",
to:data.Email,
subject: "NoTimeToWaste - Access Code ", 
html: `
Stream Link: <b>${data.Link} </b>
<br>
Your Access Code is <b>${data.Code} </b>.
<br>
<b>Please use above code to login in order to watch stream </b>`,
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