require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');
const printRoutes = require('./routes/printRoutes');
const acknowledgmentRoutes = require('./routes/acknowledgmentRoutes');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: process.env.CLIENT_URL || 'http://localhost:5000',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Routes
app.use('/api/emails', emailRoutes);
app.use('/api/print', printRoutes);
app.use('/api/acknowledgments', acknowledgmentRoutes);

// Error Handling
app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).send('Internal Server Error');
});

// Start the Server
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});
