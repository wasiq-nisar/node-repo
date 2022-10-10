const { readFile, writeFile } = require('fs').promises
//By adding require('fs').promises we do not need to use the followiing line of code
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        console.log(first, second);
        await writeFile('./content/result-mind-grenade2.txt', `This is Awesome ${first} ${second}`)
    }
    catch (error) {
        console.log(error);
    }
}

start()