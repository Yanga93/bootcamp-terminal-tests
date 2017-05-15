const assert = require('assert');
var fromWhere = require('../fromWhere');
describe("fromWhere", function(){
  it("should return 'Paarl' when given 'CJ", function(){
  assert.equal(fromWhere('CJ'), 'Paarl')
  });
});
