const { readFileSync, writeFileSync } = require('fs');
console.log("Start");
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first} \n${second} `);
console.log("Done With the Task");
console.log("Starting the Next Task");

//writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second} `, { flag: 'a' });
//The Third Argument is a flag which when set to a will append the text 