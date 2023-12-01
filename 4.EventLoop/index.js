const {readFile} = require("fs");

console.log('started a first task');

readFile("../2.content/first.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result); // Hello this is first text file
    console.log("Completed first task");
})
console.log("starting new task");
