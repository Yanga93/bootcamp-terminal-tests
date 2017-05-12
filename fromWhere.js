const assert = require('assert');
var fromWhere = function(regNum){

 switch(regNum.substring(0,2)){
 case 'CY':
   return 'Bellville';
     break;

 case 'CJ':
   return 'Paarl';
     break;

 case 'CA':
   return 'Cape Town';
     break;

 default:
       return 'Some other place!';
   }
 };
 //console.log(fromWhere('GP 2536'));
   assert.equal(fromWhere('CJ'), 'Paarl');
