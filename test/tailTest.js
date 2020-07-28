const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['There', 'Friend'] for ['Hello', 'There', 'Friend']", () => {
    let testArray = ["Hello", "There", "Friend"];
    assert.deepEqual(tail(testArray), ['There', 'Friend']);
  });

  it("still returns 3 for array length after running function", () => {
    let testArray = ["Hello", "There", "Friend"];
    tail(testArray);
    assert.strictEqual(testArray.length, 3); 
  });

});