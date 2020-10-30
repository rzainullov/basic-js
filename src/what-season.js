const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(input = 'empty') {

  if(input == 'empty') return 'Unable to determine the time of year!'
    if(typeof input !== 'object' || 'getMonth' in input == false || Array.isArray(input) || input == new Date() || input == null || Object.prototype.toString.call(input) !== '[object Date]' ){throw new Error('Error');}
    let date = input;
    switch(date.getMonth()){
        case 11:
        case 0:
        case 1:
            return "winter";
            break;
        case 2:
        case 3:
        case 4:
            return "spring";
            break;
        case 5:
        case 6:
        case 7:
            return "summer";
            break;
        case 8:
        case 9:
        case 10:
            return "autumn";
            break;
        default:
            return;

    }
};
