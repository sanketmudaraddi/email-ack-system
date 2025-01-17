// const { exec } = require('child_process');

// const printEmail = (filePath) => {
//     exec(`lp ${filePath}`, (err, stdout, stderr) => {
//         if (err) console.error(`Error printing email: ${err.message}`);
//         else console.log(`Printed successfully: ${stdout}`);
//     });
// };

// module.exports = { printEmail };

const fs = require('fs');

const printEmail = (filePath) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
        } else {
            console.log(`Simulated Print:\n${data}`);
        }
    });
};

module.exports = { printEmail };
