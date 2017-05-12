const assert = require('assert');
var isFromBellville = function(regNum){
  var location = regNum.startsWith('CY');
      console.log(location);
        return location;
}
  assert.equal(isFromBellville('CY'), true);
