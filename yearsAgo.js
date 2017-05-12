module.exports = function(year1, year2){
  var ago1 = new Date(year1);
    var ago2 = new Date(year2);
    var results = ago1.getFullYear()-ago2.getFullYear();
    return results;
  };
  
