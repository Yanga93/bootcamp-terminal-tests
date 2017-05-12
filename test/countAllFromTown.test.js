const assert = require('assert');
var countAllFromTown  = require('../countAllFromTown');
describe("countAllFromTown", function(){
  it("should return 'countRegNum.lenght' when given 'regNumList[i].startsWith(location)'", function(){
    assert.deepEqual( countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), 3)
  });
  // var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');

});
