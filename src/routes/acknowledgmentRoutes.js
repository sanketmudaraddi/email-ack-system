
const express = require('express');
const { sendAcknowledgmentEmail } = require('../controllers/acknowledgmentController');
const router = express.Router();

router.post('/send', sendAcknowledgmentEmail);

module.exports = router;
