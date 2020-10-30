const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, obj) {
 
  let outputStr = str + "";
    if(obj.hasOwnProperty('separator') == false){
        if(obj.repeatTimes == 1){
        return str
        }
        obj.separator = "+";
        for(let i = 1; i < obj.repeatTimes; i++){
            outputStr = outputStr + obj.separator + str;
        }
        return outputStr;  
    }
    else if(obj.hasOwnProperty('separator') == true && obj.hasOwnProperty('addition') == false ){
        for(let i = 1; i < obj.repeatTimes; i++){
            outputStr = outputStr + obj.separator + str;
        }
        return outputStr;  
    }
    else if(obj.hasOwnProperty('addition') == true  &&  obj.hasOwnProperty('additionSeparator') == true ){
       if(obj.repeatTimes == undefined) obj.repeatTimes = 1;
       if(obj.additionRepeatTimes == undefined) obj.additionRepeatTimes = 1;
       let additionStr = obj.addition; 
       for(let i = 1; i < obj.additionRepeatTimes; i++){
            additionStr = additionStr + obj.additionSeparator + obj.addition;
        }
        
        for(let i = 1; i < obj.repeatTimes; i++){
            outputStr = outputStr + additionStr + obj.separator + str;
        }
        return outputStr + additionStr;  
    }
    else if (obj.hasOwnProperty('addition') == true  &&  obj.hasOwnProperty('additionSeparator') == false ){
       if(obj.repeatTimes == undefined) obj.repeatTimes = 1;
       if(obj.additionRepeatTimes == undefined) obj.additionRepeatTimes = 1;
         
       let additionStr = obj.addition + "";
       for(let i = 1; i < obj.additionRepeatTimes; i++){
            additionStr = additionStr + obj.addition;
        }
        
        for(let i = 1; i < obj.repeatTimes; i++){
            outputStr = outputStr + additionStr + obj.separator + str;
        }
        return outputStr + additionStr ;
    }
};
  