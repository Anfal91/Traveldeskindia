const express = require('express');
const app = express();
const ejs =  require('ejs')
const expressEjsLayout = require('express-ejs-layouts')
const path = require('path')
const jQuery = require('jquery')
const http = require("http");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000


app.use(express.static('public'))


// set template engine
app.use(expressEjsLayout);

app.set('views', path.join(__dirname, '/public/views'))

app.set('view engine', 'ejs')

app.post("/book_flight", function (req, res) {
    res.send("hello")
    // let name = req.body.name;
    // let email = req.body.email;
    // let number = req.body.number;
    // let onwarddate = req.body.onwarddate;
    // let returndate = req.body.returndate;
    // let from = req.body.from;
    // let to = req.body.to;
    // let msg = req.body.msg;

  
    // var transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "anfal.androapps@gmail.com",
    //     pass: "dzecaliuzcmbpvcw",
    //   },
    // });
    // var mailOptions = {
    //   from: email,
    //   to: "anfalvaktapurya91@gmail.com",
    //   subject: "Enquiry from website",
    //   text: `
    //   Name: ${name}
    //   Email: ${email}
    //   Number: ${number}
    //   Onward-Date: ${onwarddate}
    //   Return-Date: ${returndate}
    //   From: ${from}
    //   To: ${to}
    //   Message: ${msg}`,
    // };
    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    //   res.redirect("/thankyou");
    // });
  });

require('./Routes/webRoute')(app)
require('./Routes/packageRoute')(app)
require('./Routes/serviceRoute')(app)

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
