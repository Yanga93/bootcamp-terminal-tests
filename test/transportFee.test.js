const assert = require('assert');
var transportFee = require('../transportFee');
describe("transportFee", function(){
  it("should return 'R20' when given shift == 'morning'", function(){
    assert.equal(transportFee('morning'), 'R20')
  });
});
