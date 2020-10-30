const CustomError = require("../extensions/custom-error");

module.exports = function transform(a) {
 
    if(Array.isArray(a) == false)throw new Error('Error')
    let b = [];
    for(let i = 0; i < a.length; i++){
        if(a[i] == '--discard-next'){
           if(a[i + 2] == '--double-prev' || a[i + 2] == '--discard-prev'){
             i += 2
           } else {i += 1}
          }
        else if(a[i] == '--double-next' && i !== a.length-1){
          if(a[i + 2] == '--discard-prev'){
              b.push(a[i+1])
              i += 2
            }
          else if(a[i + 2] == '--double-prev'){
              b.push(a[i+1])
              b.push(a[i+1])
              b.push(a[i+1])
              i += 2
            }
          else{
              b.push(a[i+1])
              b.push(a[i+1])
              i += 1
            }  
          
          }
        else if(a[i] == '--discard-prev' && i == 0 || a[i] == '--double-prev' && i == 0 ){} 
        else if(a[i] == '--discard-next' && i == a.length-1 || a[i] == '--double-next' && i == a.length-1){}
        else if(a[i + 1] == '--discard-prev'){
           i += 1
          }
        else if(a[i + 1] == '--double-prev'){
           b.push(a[i])
           b.push(a[i])
           i += 1
          }
        else {
            b.push(a[i])
          }
        
    }   
         
    return b;


};
