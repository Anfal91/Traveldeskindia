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
app.use(bodyParser.urlencoded({ extended: true }));

require('./Routes/webRoute')(app)
require('./Routes/packageRoute')(app)
require('./Routes/serviceRoute')(app)

// flight booking
app.post("/book_flight", function (req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let number = req.body.number;
    let onwarddate = req.body.onwarddate;
    let returndate = req.body.returndate;
    let from = req.body.from;
    let to = req.body.to;
    let msg = req.body.msg;

  
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "traveldeskweb@gmail.com",
        pass: "pwgnjyvtnjuezxsi",
      },
    });
    var mailOptions = {
      from: email,
      to: "support@traveldeskindia.com",
      subject: "Flight-Booking from website",
      text: `
      Name: ${name}
      Email: ${email}
      Number: ${number}
      Onward-Date: ${onwarddate}
      Return-Date: ${returndate}
      From: ${from}
      To: ${to}
      Message: ${msg}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
      res.redirect("/thankyou");
    });
  });

// air-ambulance
app.post("/book_air-ambulance", function (req, res) {
  let name = req.body.name;
  let number = req.body.number;
  let msg = req.body.msg;


  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "traveldeskweb@gmail.com",
      pass: "pwgnjyvtnjuezxsi",
    },
  });
  var mailOptions = {
    from: "traveldeskweb@gmail.com",
    to: "support@traveldeskindia.com",
    subject: "Air-ambulance-Booking from website",
    text: `
    Name: ${name}
    Number: ${number}
    Message: ${msg}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
    res.redirect("/thankyou");
  });
});

// charter booking
app.post("/book_charter", function (req, res) {
  let type = req.body.type;
  let name = req.body.name;
  let email = req.body.email;
  let number = req.body.number;
  let date = req.body.date;
  let from = req.body.from;
  let to = req.body.to;
  let msg = req.body.msg;


  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "traveldeskweb@gmail.com",
      pass: "pwgnjyvtnjuezxsi",
    },
  });
  var mailOptions = {
    from: "traveldeskweb@gmail.com",
    to: "support@traveldeskindia.com",
    subject: "Charter-Booking from website",
    text: `
    Name: ${name}
    Number: ${number}
    Email: ${email}
    Date: ${date}
    Type: ${type}
    From: ${from}
    To: ${to}
    Message: ${msg}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
    res.redirect("/thankyou");
  });
});

// buy currency
app.post("/buy_currency", function (req, res) {

  let name = req.body.name;
  let email = req.body.email;
  let number = req.body.number;


  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "traveldeskweb@gmail.com",
      pass: "pwgnjyvtnjuezxsi",
    },
  });
  var mailOptions = {
    from: "traveldeskweb@gmail.com",
    to: "support@traveldeskindia.com",
    subject: "Forex enquiry from website",
    text: `
    Name: ${name}
    Number: ${number}
    Email: ${email}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
    res.redirect("/thankyou");
  });
});

// hotel booking
app.post("/book_hotel", function (req, res) {
  let name = req.body.name;
  let hotel = req.body.hotel;
  let number = req.body.number;
  let place = req.body.place;
  let fromDate = req.body.fromDate;
  let toDate = req.body.toDate;
  let rooms = req.body.rooms;
  let adult = req.body.adult;
  let child = req.body.child;
  let category = req.body.category;
  let msg = req.body.msg;



  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "traveldeskweb@gmail.com",
      pass: "pwgnjyvtnjuezxsi",
    },
  });
  var mailOptions = {
    from: "traveldeskweb@gmail.com",
    to: "support@traveldeskindia.com",
    subject: "Hotel-Booking from website",
    text: `
    Name: ${name}
    Number: ${number}
    Hotel: ${hotel}
    Place: ${place}
    From-date: ${fromDate}
    To-date: ${toDate}
    Rooms: ${rooms}
    Adult: ${adult}
    From: ${child}
    To: ${category}
    Message: ${msg}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
    res.redirect("/thankyou");
  });
});

// travel insurance booking
app.post("/get_insurance", function (req, res) {

  let name = req.body.name;
  let email = req.body.email;
  let number = req.body.number;


  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "traveldeskweb@gmail.com",
      pass: "pwgnjyvtnjuezxsi",
    },
  });
  var mailOptions = {
    from: "traveldeskweb@gmail.com",
    to: "support@traveldeskindia.com",
    subject: "Travel insurance enquiry from website",
    text: `
    Name: ${name}
    Number: ${number}
    Email: ${email}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
    res.redirect("/thankyou");
  });
});

// Contact form
app.post("/contact_mail", function (req, res) {

  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let massage = req.body.massage;



  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "traveldeskweb@gmail.com",
      pass: "pwgnjyvtnjuezxsi",
    },
  });
  var mailOptions = {
    from: "traveldeskweb@gmail.com",
    to: "support@traveldeskindia.com",
    subject: "Contact enquiry from website",
    text: `
    Name: ${name}
    Subject: ${subject}
    Email: ${email}
    Message: ${massage}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
    res.redirect("/thankyou");
  });
});


// set template engine
app.use(expressEjsLayout);

app.set('views', path.join(__dirname, '/public/views'))

app.set('view engine', 'ejs')

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})