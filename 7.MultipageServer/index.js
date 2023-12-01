const http=require('http');
const fs=require('fs');
const { join } = require('path');
const app=http.createServer((req,res)=>{
    let {method,url}=req;         //destructing
    console.log(method,url);
    if(method=='GET'){
       if(url==='/'){              
        let data=fs.readFileSync('./public/home.html','utf-8') //Reading the home.html file
        res.writeHead(200,{"Content-type":"text/html","MSG":"THIS IS HIGH SECURITY WEBPAGE"})
        res.write(data);
        res.end()
       }
       if(url=="/homecss"){
        let data=fs.readFileSync("./public/css/home.css",'utf-8') //Reading the home.css file`
        res.writeHead(200,{"Content-type":"text/css"})
        res.write(data);
        res.end()
       }
       if(url=='/about'){
        let data=fs.readFileSync("./public/pages/about.html",'utf-8') //Reading the about file
        
        res.write(data);
        res.end()
       }
       if(url=="/aboutcss"){
        let data=fs.readFileSync("./public/css/about.css",'utf-8') //Reading the home.css file
        
        res.write(data);
        res.end()
       }
       if(url=='/contact'){
        let data=fs.readFileSync("./public/pages/contact.html",'utf-8') //Reading the contact file
        res.write(data);
        res.end()
       }
       if(url=="/contactcss"){
        let data=fs.readFileSync("./public/css/contact.css",'utf-8') //Reading the contact.css file
        res.write(data);
        res.end()
       }
       if(url=='/signup'){
        let data=fs.readFileSync("./public/pages/signup.html",'utf-8') //Reading the signup file
        res.write(data);
        res.end()
       }
       if(url=="/signupcss"){
        let data=fs.readFileSync("./public/css/signup.css",'utf-8') //Reading the signup.css file
        res.write(data);
        res.end()
       }
    }
    else if(method=="POST"){
        if(url=='/newuser'){
            // console.log(req.body);            
            req.on("data",(data)=>{
                console.log(data.toString());
                let newuser=JSON.parse(data.toString())
                let users=JSON.parse(fs.readFileSync("./Users.json","utf-8"))
                users.push(newuser);
                // console.log(users);
                fs.writeFileSync("./Users.json",JSON.stringify(users))
            })
            res.writeHead(201,{"Content-Type":"application/json"})
            res.write(JSON.stringify({msg:'DATA RECEIVED'}));
            res.end();
        }
    }
})
app.listen(4000,()=>{
    console.log(`Server started at http://localhost:4000`);
})