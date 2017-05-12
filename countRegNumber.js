const assert = require('assert');
var countRegNumber = function(registration){
  var newData = registration.split(",");
  console.log(newData);
    return newData.length;
  };
    var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
    console.log(regCount);
assert.equal(regCount, 3);
