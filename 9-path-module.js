const path = require('path');

console.log(path.sep);      //To show which path seperator is used

const filePath = path.join('/content', 'sub-folder', 'test.txt');       //To create a path
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

console.log(__dirname);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
