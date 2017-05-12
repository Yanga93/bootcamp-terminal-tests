module.exports = function(registration){
  var newData = registration.split(",");
  console.log(newData);
    return newData.length;
  };
