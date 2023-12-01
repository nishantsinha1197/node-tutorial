const { readFileSync, writeFileSync } = require("fs");
//Sync method
console.log('start');
const first = readFileSync("../2.content/first.txt", "utf-8");
const second = readFileSync("../2.content/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "../2.content/result-sync.txt",
  `Here is the result: ${first},${second}`,
  {flag:'a'} //For appending
);
console.log('done with this task');
console.log('starting the next one');