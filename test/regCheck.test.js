const assert = require('assert');
var regCheck = require('../regCheck');
describe("regCheck", function(){
  it("should return 'result' when given regNum.endsWith(location)", function(){
    assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
  });
});
