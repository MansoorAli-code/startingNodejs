const http = require('http');

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, my name is Mansoor');
})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})