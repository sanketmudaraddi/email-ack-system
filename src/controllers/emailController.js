const { sendAcknowledgment } = require('../services/emailService');
const { saveEmail } = require('../services/storageService');
const moment = require('moment');

const receiveEmail = async (req, res, next) => {
    try {
        const { sender, content } = req.body;

        // Save email locally
        const emailId = Date.now();
        saveEmail(content, emailId);

        // Send acknowledgment
        const timestamp = moment().toISOString();
        await sendAcknowledgment(sender, content, timestamp);

        res.status(200).json({ message: 'Email processed successfully', timestamp });
    } catch (error) {
        next(error);
    }
};

module.exports = { receiveEmail };
