const { createReadStream } = require('fs');

//const stream = createReadStream('./content/big.txt');
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf-8' });

// default 64KB
// last buffer - remainder
// highWaterMark - control size
// encoding - To show content of the file

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})