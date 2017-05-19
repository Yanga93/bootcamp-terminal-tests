 module.exports = function(itemList) {
   var empty = [];
  for (var i = 0; i < itemList.length; i++) {
    var items = itemList[i];
    if (items.qty > 20) {
      empty.push(items);
    }
  }
  return empty;
}
// testcode
var itemList = [
  {name : 'apples', qty : 10},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'apples', qty : 3}
];
