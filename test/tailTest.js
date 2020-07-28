const tail = require('../tail');
const assertEqual = require('../assertEqual');

let testArray = ["Hello", "There", "Friend"];
tail(testArray);
assertEqual(testArray.length, 3);
