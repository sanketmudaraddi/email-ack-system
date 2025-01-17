const { sendAcknowledgment } = require('../services/emailService');

const sendAcknowledgmentEmail = async (req, res, next) => {
    try {
        const { recipient, originalEmail, timestamp } = req.body;
        await sendAcknowledgment(recipient, originalEmail, timestamp);
        res.status(200).json({ message: 'Acknowledgment email sent successfully' });
    } catch (error) {
        next(error);
    }
};

module.exports = { sendAcknowledgmentEmail };
