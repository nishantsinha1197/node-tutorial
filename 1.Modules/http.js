const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write("Welcome to our homepage");
        res.end()
    }    
    else if(req.url==='/about'){
        res.write("Here is our short history");
        res.end()
    }
    else {
        res.write('<h1>404 , Page not found</h1>')
        res.end()
    }
})

server.listen(5000,()=>{
    console.log('server is listening on port 5000');
})