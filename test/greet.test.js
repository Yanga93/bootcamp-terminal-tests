const assert = require('assert');
var greet = require('../greet');
describe("greet", function() {
  it("should return 'hello Mandisi' when given 'Mandisi'", function() {
    assert.equal(greet('Mandisi'), 'hello Mandisi');
  });
});
