const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
var a = 0.693;
module.exports = function dateSample(sampleActivity) {
    if(typeof(sampleActivity) == 'string'){
      var intSampleActivity = parseFloat(sampleActivity);
      if(intSampleActivity>0 && intSampleActivity < MODERN_ACTIVITY){
        var sumOfYears = Math.log((MODERN_ACTIVITY/intSampleActivity))/(a/HALF_LIFE_PERIOD);
        sumOfYears = Math.ceil(sumOfYears);
        return sumOfYears;
      } else {
        return false;
      }
    } else{
      return false;
    }
};
