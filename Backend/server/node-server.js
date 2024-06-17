const http = require('http')

const host = '127.0.0.1'; //'192.168.43.99';
const port = 3000;
const server= http.createServer((req,res)=>{
    if (req.url=='/') {
        res.statusCode =200;
        res.setHeader('Content-Type','text/plain');
        res.end('You are at home buddy');}
    else if (req.url=='/backend') {
        res.statusCode=200;
        res.setHeader('content-Type','text/plain')
    
        res.end('hello hitesh from the backend series')
    }
    else{
        res.statusCode=404;
        res.setHeader('Content-Type','text/plain')
        res.end('404 Not Found');
    }
})
server.listen(port,host,()=>{console.log(`Server is running at http://${host}:${port}`)})