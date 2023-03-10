const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'http://aniosindustries.com'],
}));


app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });

const PORT = process.env.NODE_ENV || 9000;
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});

app.post('/send', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
  
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });
  
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: 'New message from contact form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        res.send('Error: Your message could not be sent.');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Thank you for your message!');
      }
    });
  });
  