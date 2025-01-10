const mongoose = require('mongoose');
require('../models/ContactUs.js');
const Contact = mongoose.model('ContactUs');

const _= require('lodash');
var async = require("async");
var nodemailer = require("nodemailer");
module.exports.addContactDetails = async (req, res, next) => {
  try {
    // Create a new contact
    const contact = new Contact({
      fullName: req.body.fullName,
      email: req.body.email,
      subject: req.body.subject,
      mobileNo: req.body.mobileNo,
      message: req.body.message,
    });

    // Save the contact to the database
    await contact.save();

    // Set up nodemailer transport
    const smtpTransport = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      secure: true,
      secureConnection: false, // TLS requires secureConnection to be false
      tls: {
        ciphers: 'SSLv3',
      },
      requireTLS: true,
      port: 465,
      debug: true,
      auth: {
        user: "an.panchal97@gmail.com",
        pass: "Ganesh@1228",
      },
    });

    // Prepare email options
    const mailOptions = {
      to: 'am.panchal97@gmail.com',
      from: contact.email,
      subject: contact.subject,
      html: `
        <h1>Contact Details</h1>
        <p>User FullName: ${contact.fullName}</p>
        <p>User Email: ${contact.email}</p>
        <p>User Subject: ${contact.subject}</p>
        <p>User Mobile No.: ${contact.mobileNo}</p>
        <p>User Message: ${contact.message}</p>
      `,
    };

    // Send the email
    await smtpTransport.sendMail(mailOptions);

    // Send response
    res
      .status(200)
      .send(['An e-mail has been sent to ' + contact.email + ' with further instructions.']);
  } catch (err) {
    next(err); // Pass errors to the Express error handler
  }
};
