const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean = true){
    this.encryptType = boolean;
    this.alphabet = [
      {
          " ": " ",
          "A": "0",
          "B": "1", 
          "C": "2", 
          "D": "3", 
          "E": "4", 
          "F": "5", 
          "G": "6", 
          "H": "7", 
          "I": "8", 
          "J": "9", 
          "K": "10", 
          "L": "11", 
          "M": "12", 
          "N": "13", 
          "O": "14", 
          "P": "15", 
          "Q": "16", 
          "R": "17", 
          "S": "18", 
          "T": "19", 
          "U": "20", 
          "V": "21", 
          "W": "22", 
          "X": "23", 
          "Y": "24", 
          "Z": "25", 
          "0": "A",
          "1": "B", 
          "2": "C", 
          "3": "D", 
          "4": "E", 
          "5": "F", 
          "6": "G", 
          "7": "H", 
          "8": "I", 
          "9": "J", 
          "10": "K", 
          "11": "L", 
          "12": "M", 
          "13": "N", 
          "14": "O", 
          "15": "P", 
          "16": "Q", 
          "17": "R", 
          "18": "S", 
          "19": "T", 
          "20": "U", 
          "21": "V", 
          "22": "W", 
          "23": "X", 
          "24": "Y", 
          "25": "Z", 
      }
  
  ];
  }

  encrypt(message = 'empty',key = 'empty') {
    if(message == 'empty' || key == 'empty') throw new Error('Error')
    let mes = message.split('').map(letter => letter.toLocaleUpperCase());
    let k = key.split('').map(letter => letter.toLocaleUpperCase());
    let lengMes = 0;
    mes.forEach(i => {
      if(/[a-zA-Z]/gm.test(i)) lengMes += 1
    });
    let dif = Math.abs(lengMes - k.length)
    for(let i = 0; i < dif; i++){
      k.push(k[i])
    }
    let count = 0;
    let res = new Array(mes.length)
    for(let i = 0; i < res.length; i++){
        if(/[A-Z]/gm.test(mes[i])){
          res[i] = parseFloat(this.alphabet[0][mes[i]]) + parseFloat(this.alphabet[0][k[count]])
          count += 1
          if(res[i] >= 26){ 
              res[i] = res[i] - 26;
              res[i] = this.alphabet[0][res[i]];                    
             }
          else { res[i] = this.alphabet[0][res[i]];} 
      } else {
          
          res[i] = mes[i]
      }
           
    }
    return this.encryptType ? res.join('') : res.reverse().join('')
  }    
  decrypt(message = 'empty',key = 'empty')  {
    if(message == 'empty' || key == 'empty') throw new Error('Error')
    // if(message == 'empty' || key == 'empty') throw new CustomError('Required parameter wasn\'t founded')
    let mes = message.split('').map(letter => letter.toLocaleUpperCase());
    let k = key.split('').map(letter => letter.toLocaleUpperCase());
    let lengMes = 0;
    mes.forEach(i => {
      if(/[a-zA-Z]/gm.test(i)) lengMes += 1
    });
    let dif = Math.abs(lengMes - k.length)
    for(let i = 0; i < dif; i++){
      k.push(k[i])
    }
    let count = 0;
    let res = new Array(mes.length)
    for(let i = 0; i < res.length; i++){
        if(/[A-Z]/gm.test(mes[i])){
          if(parseFloat(this.alphabet[0][mes[i]]) < parseFloat(this.alphabet[0][k[count]])){
              res[i] = parseFloat(this.alphabet[0][mes[i]]) + 26 - parseFloat(this.alphabet[0][k[count]]);
              
            }
         else { res[i] = parseFloat(this.alphabet[0][mes[i]]) - parseFloat(this.alphabet[0][k[count]])}
          count += 1
          res[i] = this.alphabet[0][res[i]];                    
             
          
      } else {
          
          res[i] = mes[i]
      }
           
    }
    return this.encryptType ? res.join('') : res.reverse().join('')
  
  }
}

module.exports = VigenereCipheringMachine;


