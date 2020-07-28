const assert = require('chai').assert;
const middle = require('../middle');

describe("#tail", () => {
  it("returns empty array for one element array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns empty array for 2 element array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns one middle element for an array with an odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns 2 middle elements for an array with an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});