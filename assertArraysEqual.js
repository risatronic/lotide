const eqArrays = function(array1, array2) {
  let areEqual = true;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      areEqual = false;
    }
  }
  return areEqual;
};

const assertArraysEqual = function() {
  let arrays = process.argv.slice(2);

  if (eqArrays(arrays[0], arrays[1])) {
    console.log("These arrays are equal :)");
  } else {
    console.log("These arrays are not equal :(");
  }
};

assertArraysEqual();