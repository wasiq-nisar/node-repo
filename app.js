const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);  //Will return a flat array part of lodash module
console.log(newItems);