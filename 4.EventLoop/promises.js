const {readFile,writeFile} = require("fs").promises;

const start = async() =>{
    try{
        const first = await readFile("../2.content/first.txt",'utf-8')
        const second = await readFile("../2.content/second.txt",'utf8')
        await writeFile("./mind-grenade.txt",`THIS IS AWESOME : ${first} ${second}`)
        console.log(first,second); 
    }
    catch (error){
        console.log(error);
    }
    
}
start()