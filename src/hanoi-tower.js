const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(num, rate) {
  let obj = {};
    obj.turns =  Math.pow(2,num)-1
    obj.seconds = Math.floor(obj.turns/(rate/3600));
    return obj;
};
