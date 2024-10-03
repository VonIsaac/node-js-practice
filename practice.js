const http = require('http')


const server = http.createServer((req, res) => {
   // const method = req.method;
    const url = req.url;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Assignment one </title></head>')
        res.write('<body><form method = "POST" action = "/creat-user"><input type="text" name="message"><button type = "submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><h1>Welcome Users</h1></head>')
        res.write('<body><ul><li>User 1</li></ul></body>')
        res.write('</html>')
        return res.end()
    }

    if(url === '/creat-user'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk)
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody.split('=')[1])
           
        });

        res.statusCode = 302;
        res.setHeader('Location', '/')
        res.end()
    }

})      


server.listen(8000)

/*   res.write('<form method = "POST" action = "/creat-user"><input type="text" name="message"><button type = "submit">Submit</button></form>') */