const { readFile, writeFile } = require("fs");

//Async method
console.log('start');
readFile("../2.content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("../2.content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "../2.content/result-async.txt",
      `Here is the result: ${first},${second}`,
      (err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(result);
        console.log('done with this task');
      }
    );
  });
});
console.log('starting next task');
