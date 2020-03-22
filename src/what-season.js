module.exports = function getSeason(date) {
  if(date == undefined){
    return 'Unable to determine the time of year!';
  }
  if(date instanceof Date){
    var k = date.getMonth();
    if(k >= 2 && k <=4) {
      return 'spring';
    } else if(k >= 5 && k <= 7) {
      return 'summer';
    } else if(k >= 8 && k <= 10) {
      return 'autumn';
    } else if(k == 0 || k == 11 || k == 1) {
      return 'winter';
    }
  } else {
    throw('throws an error on invalid argument');
  }
};

//console.log(getSeason('1995-12-17T03:24:00'));
