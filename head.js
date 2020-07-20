const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`:relieved::relieved::relieved: Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:weary::weary::weary: Assertion Failed: ${actual} !== ${expected}`);
  }
}

const head = function(array){
  return array[0];
}

assertEqual(head([]), 5);
assertEqual(head(["Hello"]), "Hello");
