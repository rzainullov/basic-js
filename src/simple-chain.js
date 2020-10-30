const CustomError = require("../extensions/custom-error");

const chainMaker = {
        values:[],
        values:[],
        getLength() {
            return this.values.length    
        },
        addLink(value = '') {
        this.values.push(value + '');
        return this
        },
        removeLink(position) {
      //     if(this.values.include(position))
      //     this.values.splice((this.values.indexOf('' + position,0)),1)
          if(this.values.length < position || typeof position !== 'number' || Number.isInteger(position) == false || position < 1){
              this.values = []; 
              throw new Error('Error')
          }
          this.values.splice(position-1,1);
          return this
          
        },
        reverseChain() {
          this.values = this.values.reverse();
          return this;
            
        },
        finishChain() {
          if(this.values.length == 0) return 'Error'
          let concat = ''
          for(let i = 0; i < this.values.length - 1;i++){
              concat += `( ${this.values[i]} )~~` 
          }
          concat += `( ${this.values[this.values.length-1]} )`;
          this.values = [];
          return concat;
          
        }
    
  };

module.exports = chainMaker;
