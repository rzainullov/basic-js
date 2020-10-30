const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if(Array.isArray(array)){
    let names = [];
    let dreamTeamName = '' 
    array.forEach((name) => {
      if(typeof name == "string" && /[a-zA-Z]/gm.test(name.trim()[0])){
            names.push(name.trim().toUpperCase()[0])
          }
      });
    names.sort(function(a,b){
          if (a < b) {
            return -1;
              }
          if (a > b) {
            return 1;
          }
          return 0;
        }); 
    names.forEach((letter) => {
          dreamTeamName  = dreamTeamName + letter
        });   
      
    return dreamTeamName;
    }
  else{
      return false;
  }
};

