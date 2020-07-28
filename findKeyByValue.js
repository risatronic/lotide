const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😌😌😌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (let key of Object.keys(object)) {
    //console.log(`key: ${key}, value: ${value}`);
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);