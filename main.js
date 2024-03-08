
const http = require('http');

const express = require('express');

const app = express();

app.use((req,res) => {
    console.log("In the middleware!");
    next();
})

app.use((req,res) => {
    console.log("In another middleware!");
})

// const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);
