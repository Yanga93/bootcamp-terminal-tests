const assert = require('assert');
var isFromBellville = require('../isFromBellville');
describe("isFromBellville", function(){
  it("should return 'location' when given regNum.startsWith('CY')", function(){
    assert.equal(isFromBellville('CY'), true);
    });
});
