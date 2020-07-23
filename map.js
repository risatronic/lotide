const eqArrays = function(array1, array2) {
  let areEqual = true;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const numbers = [1, 2, 3, 4, 5];

let results = map(numbers, x => x * x);
console.log(assertArraysEqual(results, [1, 4, 9, 16, 25]));
console.log(assertArraysEqual(results, [1, 4, 9, 16, 25, 7]));

const letters = ['a', 'b', 'c', 'd'];

results = map(letters, x => x += x);
console.log(assertArraysEqual(results, ['aa', 'bb', 'cc', 'dd']));
console.log(assertArraysEqual(results, ['aa', 'bb', 'cc', 'dd', 'ee']));

const numbers2 = [1, 2, 3];

results = map(numbers2, x => x += `${x}`);
console.log(assertArraysEqual(results, [11, 22, 33])); //false due to type change
console.log(assertArraysEqual(results, ['11', '22', '33'])); //true