const config = {
    port: process.env.PORT || 3000,
    email: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT || 587,
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    storagePath: './emails', 
};

module.exports = config;
