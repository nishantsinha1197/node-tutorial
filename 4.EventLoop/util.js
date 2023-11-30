const {readFile,writeFile} = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    try{
        const first = await readFilePromise("../2.content/first.txt",'utf-8')
        const second = await readFilePromise("../2.content/second.txt",'utf8')
        await writeFilePromise("./result-mind-grenade.txt",`THIS IS AWESOME : ${first} ${second}`)
        console.log(first,second); 
    }
    catch (error){
        console.log(error);
    }
    
}
start()

//check promises.js for another approach