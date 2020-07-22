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

const middle = function(array) {
  const returnArray = [];

  if (array.length > 2) {
    let middle = array.length / 2 - 1;
    if (array.length % 2 !== 0) {
      //console.log(middle);
      returnArray.push((array[Math.ceil(middle)]));
    } else {
      returnArray.push(array[middle], array[middle + 1]);
    }
    return returnArray;
  } else {
    return [];
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);