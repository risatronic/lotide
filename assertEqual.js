// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`:relieved::relieved::relieved: Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:weary::weary::weary: Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Cool", "Cool");
assertEqual(17, 97);