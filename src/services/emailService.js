const nodemailer = require('nodemailer');
const config = require('../config/appConfig');

const transporter = nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: false, 
    auth: {
        user: config.email.user,
        pass: config.email.pass,
    },
    debug: true,
    logger: true,
});

const sendAcknowledgment = async (recipient, originalEmail, timestamp) => {
    const message = `
        <p>Dear Customer,</p>
        <p>Thank you for your email. Below are the details:</p>
        <p>Your email was received at: ${timestamp}</p>
        <blockquote>${originalEmail}</blockquote>
    `;

    return transporter.sendMail({
        from: `"${config.email.fromName}" <${config.email.fromEmail}>`,
        to: recipient,
        subject: 'Acknowledgment: Email Received',
        html: message,
    });
};

module.exports = { sendAcknowledgment };
