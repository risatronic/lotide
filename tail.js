const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`:relieved::relieved::relieved: Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:weary::weary::weary: Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

let testArray = ["Hello"];
console.log(tail(testArray));
testArray = [];
console.log(tail(testArray));
testArray = ["Hey", "You", "There"];
console.log(tail(testArray));
assertEqual(testArray.length, 3);
