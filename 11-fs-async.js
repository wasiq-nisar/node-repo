const { readFile, writeFile } = require('fs');
console.log("Start");

//The Way the async work we need a callback
//When whatever functionality we are doing is done than we run our callback

//Below if we do not provide the utf8 parameter a error will occur
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first} \n${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log("Done with this Task");
        });
    })
})
console.log("Starting the new Task");
