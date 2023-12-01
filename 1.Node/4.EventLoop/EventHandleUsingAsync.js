const {readFile} = require("fs");

const getText =(path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,result)=>{
            if(err)
                reject(err)
            else  
                resolve(result)
        })
    })
}
//1
getText("../2.content/first.txt")
.then((result)=>console.log(result))
.catch((err)=>console.log(err))

//2
const start = async() =>{
    try{
        const first = await getText("../2.content/first.txt")
        const second = await getText("../2.content/second.txt")
        console.log(first,second); 
    }
    catch (error){
        console.log(error);
    }
    
}
start()

//Check util.js for another approach
