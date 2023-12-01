const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        //res.write("HOMEPAGE")
        res.end("HOMEPAGE")
    }
    else if(req.url=='/About'){
        //res.write("About Page")

        //BLOCKING CODE
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(i,j);
            }
        }
        res.end("About Page")
    }
    else{
        res.end('Error Page')
    }
    
})

server.listen(5678,()=>{
    console.log('server is listening on PORT 5678');
})
