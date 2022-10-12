var http = require('http');

const { readFileSync, createReadStream } = require('fs');

const server = http.createServer();
server.on('request', (req, res) => {
    // const text = readFileSync('./content/big.txt', 'utf-8');
    // res.end(text);      //As the content is very large so it is not a good practice

    const stream = createReadStream('./content/big.txt', { encoding: 'utf-8' });
    stream.on('open', () => {
        stream.pipe(res);   //Like Reading data in chunks we are writing data in chunks
    })

    stream.on('error', (err) => {
        console.log(err);
    })

})

server.listen(5000);