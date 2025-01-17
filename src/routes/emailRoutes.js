const express = require('express');
const { receiveEmail } = require('../controllers/emailController');
const router = express.Router();

router.post('/receive', receiveEmail);

module.exports = router;
