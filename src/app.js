require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');
const printRoutes = require('./routes/printRoutes');
const acknowledgmentRoutes = require('./routes/acknowledgmentRoutes');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
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
