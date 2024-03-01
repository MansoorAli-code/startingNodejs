
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        const messages = fs.existsSync('messages.txt') ? fs.readFileSync('messages.txt', 'utf8') : '';
        const lastMessage = messages.trim().split('\n').pop();
        res.write(`<title>${lastMessage || 'Message Board'}</title>`);
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Message Board</h1>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');

        if (messages) {
            res.write('<h2>Previous Messages:</h2>');
            res.write('<ul>');
            messages.split('\n').forEach(message => {
                if (message.trim() !== '') {
                    res.write(`<li>${message}</li>`);
                }
            });
            res.write('</ul>');
        }
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            if (!fs.existsSync('messages.txt')) {
                fs.writeFileSync('messages.txt', '');
            }
            fs.appendFileSync('messages.txt', message + '\n');
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
});

server.listen(3000);
