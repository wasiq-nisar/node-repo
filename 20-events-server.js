const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('Request Event');
//     res.end('Hello World');
// })

// server.listen(5000, () => {
//     console.log('Server Listening on Port: 5000');
// })

//Using Event Emitter Api
const server = http.createServer();
//Behind the scenes server emits request event
//subscribe to it / listen to it / respond to it
server.on('request', (req, res) => {
    res.end('Welcome');
})

//Server has a on method and when a request comes in it handles that request event 

server.listen(5000);