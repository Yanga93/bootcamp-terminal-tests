const assert = require('assert');
var regCheck = function(regNum, location){
  var result = regNum.endsWith(location);
    console.log(result);
      return result;
}
  assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
