const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Home Page');
    }
    if (req.url === '/about') {
        res.end('Here is our Brief History');
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We Can't seem to find what you are looking for</p> 
        <a href="/"> Back to Home Page </a>
    `)
    // res.write('Welcome to our Home Page');
    // res.end();
})

server.listen(5000);