const { readFile, writeFile } = require('fs');
const util = require('util');
//util.promisify() util module function that makes a promise
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        console.log(first, second);
        await writeFilePromise('./content/result-mind-grenade.txt', `This is Awesome ${first} ${second}`)
    }
    catch (error) {
        console.log(error);
    }
}

start()