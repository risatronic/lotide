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

const flatten = function(array){
  let flattenedArray = [];
  
  for(let element of array){
    if(Array.isArray(element)){
      for(let item of element){
        flattenedArray.push(item);
      }
    }else{
      flattenedArray.push(element);
    }
  }

  return flattenedArray;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));