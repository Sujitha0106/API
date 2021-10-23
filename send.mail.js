const { getUserByEmailID } = require('./user.service');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '2002sujithad@gmail.com',
        pass: '9788012228'
    }
});

var mailOptions = {
    from: '2002sujithad@gmail.com',
    to: 'sujithadhamotharan2002@gmail.com',
    subject: '"Hello ✔',
    text: "Hello world?"
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});