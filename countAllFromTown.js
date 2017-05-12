module.exports = function(regCar, location) {
  var regNumList = regCar.split(",");

  var countRegNum = [];
  for (var i = 0; i < regNumList.length; i++) {

    if (regNumList[i].startsWith(location)) {
      countRegNum.push(regNumList[i]);
    }
  }
  return countRegNum.length;
};
