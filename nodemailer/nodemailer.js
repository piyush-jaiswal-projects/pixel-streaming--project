
const nodemailer = require("nodemailer");

module.exports.mail= async (str,data) => {
    console.log(str);
    console.log(data);
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
to:data.Email,
subject: "<b>NoTimeToWaste - Access Code </b>", 
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