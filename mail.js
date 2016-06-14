var express=require('express');
var nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');
var app=express();

var smtpTransport = nodemailer.createTransport({
   service: "Gmail",
   auth: {
   	 xoauth2: xoauth2.createXOAuth2Generator({
            user: 'tamiolaf@gmail.com',
            clientId: '667790067634-4669g2fe5du1vmtf3u2dr7e7kpg2lo27.apps.googleusercontent.com',
            clientSecret: 'M8N8LWF0p1idQYwSdb3nV47i',
            refreshToken: '{refresh-token}',
            accessToken: '{cached access token}'
        })
     }
});

smtpTransport.sendMail({
   from: "Tami Olafunmiloye <tamiolaf@gmail.com>", // sender address
   to: "Work Tami <oolafunmiloye@eitccorp.com>", // comma separated list of receivers
   subject: "Email from node.js!", // Subject line
   text: "You did it!" // plaintext body
}, function(error, response){
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: "Vmodel.generateToken = function(type, req, callback) {
  //Use the default implementation for refresh token

/*
app.get('/',function(req,res){
res.sendfile('index.html');
});
app.listen(3000,function(){
console.log("Express Started on Port 3000");
});
*/