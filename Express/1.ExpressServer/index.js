const express=require('express');
const app=express();
const PORT=7000;
const hostName="127.0.0.1"

//middlewares
app.use(express.json()) //middleware - express.json()

//get method
app.get("/",(req,res)=>{
    res.status(200).send("<h1><marquee>WELCOME TO EXPRESS JS<marquee/></h1>")
})
app.get("/about",(req,res)=>{
    res.status(200).send("<h1>ABOUT PAGE</h1>")
})
app.get('*',(req,res)=>{
    res.status(404).send("Page not found")
})
app.post("/user",(req,res)=>{
    console.log(req.body);
    res.status(200).send("HEY")
})
app.listen(PORT,hostName,()=>{
    console.log(`Server started at http://${hostName}:${PORT}`);
})