const http = require('http');

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/home') {
        res.end('Welcome home');
      } else if (req.url === '/about') {
        res.end('Welcome to About Us page');
      } else if (req.url === '/node') {
        res.end('Welcome to my Node Js project');
      }else if (req.url === '/') {
        res.end('Welcome to the homepage');
      } else {
        res.end('Page not found');
      }
})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})