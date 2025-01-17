const express = require('express');
const { printEmailContent } = require('../controllers/printController');
const router = express.Router();

router.post('/', printEmailContent);

module.exports = router;
