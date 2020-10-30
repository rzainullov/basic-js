const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity = "") {
 
  if(typeof sampleActivity == "number" || typeof sampleActivity == "boolean" || typeof sampleActivity == "object"){
    return false
  }
  let parsedsampleActivitying = parseFloat(sampleActivity) 
  if(sampleActivity == "" || parsedsampleActivitying < 1 || parsedsampleActivitying > 15 ||isNaN(parsedsampleActivitying)){
    return false;
  }
  return Math.ceil(Math.log(15/parsedsampleActivitying)/0.000120968)

};
