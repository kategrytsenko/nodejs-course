const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My home work</title></head>');
        res.write('<body>');
        res.write('<h1>Hello from node.js!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Save user</button></form>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>My home work</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');

        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
           body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            console.log(userName);
        });

        return res.end();
    }
};

module.exports = requestHandler;
