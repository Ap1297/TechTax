const mongoose = require("mongoose");

const contactSchema =new mongoose.Schema({

    fullName: {
       type: String,
       required: 'Full name can\'t be empty'
   },
   email: {
       type: String,
       required: 'Email can\'t be empty'
   },
   subject: {
       type: String,
       required: 'Subject can\'t be empty',
   },
   mobileNo: {
       type:String
   }, 
   message:{
       type:String
   }

});

module.exports =  mongoose.model('ContactUs', contactSchema);