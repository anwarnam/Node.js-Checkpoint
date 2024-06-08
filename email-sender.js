const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});


const mailOptions = {
  from: 'anwar.namoune.engi@gmail.com',
  to: 'anwar.namoune.engi@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js!'
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
