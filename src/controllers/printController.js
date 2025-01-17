const { printEmail } = require('../services/printService');

const printEmailContent = (req, res, next) => {
    try {
        const { filePath } = req.body;
        printEmail(filePath);
        res.status(200).json({ message: 'Email sent to printer successfully' });
    } catch (error) {
        next(error);
    }
};

module.exports = { printEmailContent };
