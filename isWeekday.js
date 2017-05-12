const assert = require('assert');
var isWeekday = function(day){
  var myWeekDay = !day.startsWith('S');
     console.log(myWeekDay);
      return myWeekDay;
};
assert.equal(isWeekday('S'), true);
