const eqArrays = function(array1, array2) {
  let areEqual = true;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      areEqual = false;
    }
  }
  return areEqual;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`${array1} === ${array2}\nThese arrays are equal :)`);
  } else {
    console.log(`${array1} !== ${array2}\nThese arrays are not equal :(`);
  }
};

const without = function(source, itemsToRemove) {
  const modifiedArray = [];

  for (let i = 0; i < source.length; i++) {
    let shouldRemove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldRemove = true;
      }
    }
    if (!shouldRemove) {
      modifiedArray.push(source[i]);
      shouldRemove = false;
    }
  }
  return modifiedArray;
};

module.exports = without;

// const testArray = ["dog", "cat", "hippo", "hamster", "cow"];
// console.log(without(testArray, ["cow", "hippo"]));
// assertArraysEqual(without(testArray, ["cow", "hippo"]), ["dog", "cat", "hamster"]);
// assertArraysEqual(testArray, ["dog", "cat", "hippo", "hamster", "cow"]);

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));
// // // no need to capture return value for this test case
// // // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);