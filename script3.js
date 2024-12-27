const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Nodemailer transport configuration for Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Your Gmail email
        pass: 'your-email-password'    // Your Gmail password (or app-specific password)
    }
});

// POST endpoint to handle booking form submission and send confirmation email
app.post('/book', (req, res) => {
    const { serviceType, service, appointmentDate, appointmentTime, fullName, email } = req.body;

    // Prepare the email content
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Bold Salon - Appointment Confirmation',
        text: `Hello ${fullName},\n\nYour appointment for the following service has been confirmed:\n\n
                Service: ${service}\n
                Date: ${appointmentDate}\n
                Time: ${appointmentTime}\n\n
                Thank you for booking with us! We look forward to seeing you soon at Bold Salon.\n\n
                Regards,\nBold Salon Team`
    };

    // Send the email using NodeMailer
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Failed to send confirmation email.' });
        }
        console.log('Email sent: ' + info.response);
        return res.status(200).json({ message: 'Booking confirmed! A confirmation email has been sent.' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
