const assert = require('assert');
var yearsAgo = function(year1, year2){
  var ago1 = new Date(year1);
    var ago2 = new Date(year2);
    var results = ago1.getFullYear()-ago2.getFullYear();

    console.log(results);
    return results;
  };
    assert.equal(yearsAgo('2016-11-11', '1994-04-03'), 22);
