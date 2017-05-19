const assert = require('assert');
var findItemsOver20 = require('../findItemsOver20');
describe("findItemsOver20", function(){
  it("should return 'itmes over 20' when given 'itemList", function(){
    // testcode
var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}
];
    var results = findItemsOver20(itemList);
    assert.deepEqual(results, [ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ]);

  });
});
