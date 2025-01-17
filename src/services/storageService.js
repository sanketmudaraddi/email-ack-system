const fs = require('fs');
const path = require('path');
const config = require('../config/appConfig');

const saveEmail = (emailContent, emailId) => {
    const dir = config.storagePath;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    fs.writeFileSync(path.join(dir, `${emailId}.txt`), emailContent);
};

module.exports = { saveEmail };
