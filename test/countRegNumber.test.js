const assert = require('assert');
var countRegNumber = require('../countRegNumber');
describe("countRegNumber", function(){
  it("should return 'newData.length' when given 'regCount'", function(){
    assert.equal(regCount, 3)
  });
   var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
});
