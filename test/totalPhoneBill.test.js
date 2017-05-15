const assert = require('assert');
var totalPhoneBill = require('../totalPhoneBill');
describe("totalPhoneBill", function(){
  it("should return '7.45' when given 'total'", function () {
    assert.equal(totalPhoneBill('call,sms,call,sms,sms').toFixed(2), 7.45)
  });
});
