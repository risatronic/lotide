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

module.exports = middle;