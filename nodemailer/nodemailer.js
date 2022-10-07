
const nodemailer = require("nodemailer");

module.exports.mail= async (str,data) => {
    console.log(str);
    console.log(data);
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
html: `<b>Stream Link: ${data.Link}
<br>
Your Access Code is ${data.Code}.
<br>
Please use above code to login in order to watch stream </b>`,
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