const http = require("http")

const server = http.createServer((req,res)=>{ //callback takes two object req ans res
    console.log('request event');
    res.end('HELLO WORLD')
})

server.listen(5000,()=>{
    console.log('Sever listening on PORT 5000');
})
