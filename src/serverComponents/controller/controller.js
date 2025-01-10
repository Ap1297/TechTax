const mongoose = require('mongoose');
require('../models/ContactUs.js');
const Contact = mongoose.model('ContactUs');

const _= require('lodash');
var async = require("async");
var nodemailer = require("nodemailer");
module.exports.addContactDetails = (req,res, next) =>{

    var contact = new Contact();
    
    contact.fullName = req.body.fullName;
    
    contact.email = req.body.email;
    
    contact.subject = req.body.subject;
    
    contact.mobileNo = req.body.mobileNo;
    
    contact.message = req.body.message;
  
    async.waterfall([
  
      function(done) {
  
    contact.save(function(err) {
      done(err,contact);
    });
        
    
  
  }, function(contact, done) {
    var smtpTransport = nodemailer.createTransport({
      host: "smtpout.secureserver.net",  
      secure: true,
      secureConnection: false, // TLS requires secureConnection to be false
      tls: {
          ciphers:'SSLv3'
      },
      requireTLS:true,
      port: 465,
      debug: true,
      auth: {
          user: "am.panchal97@gmail.com",
          pass: "Ganesh@1297" 
      }
    });
    var mailOptions = {
      to: 'am.panchal97@gmail.com',
      from: contact.email,
      subject: contact.subject,
      html: '<h1>Contact Details</h1><br><p>User FullName :'+contact.fullName+'</p><br><p>User Email :'+contact.email+'</p><br><p>User Subject :'+contact.subject+'</p><br><p>User Mobile No. :'+contact.mobileNo+'</p><br><p>User Message :'+contact.message+'</p>'
  
    };
    smtpTransport.sendMail(mailOptions, function(err) {
        done(err, 'done');
    });
  }
  ], function(err) {
  if (err) return next(err);
    res.status(200).send(['An e-mail has been sent to ' + contact.email + ' with further instructions.']);   
  });
}