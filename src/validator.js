const validator = {
  isValid: function(e) {
    //algoritmo luhn
        let newNumberCard = e.split('').reverse().map(Number);
        
        newNumberCard = newNumberCard.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit);
        newNumberCard = newNumberCard.map(digit => digit > 9 ? digit - 9 : digit);
        let suma = newNumberCard.reduce((accNuevo , valorNuevo) => accNuevo + valorNuevo);
        if (suma % 10 === 0){
            return true; 
        }else {
            return false;
        }
  },

  maskify: function(e) { 

     return e.split('').map((digit,idx)=>idx < e.length - 4 ? '#' : digit).join('');
   /* if (e.length == 13 ){
       return e.replace(/\d{9}(\d{4})/, "#########$1");
    }
    if (e.length == 16) {
      return e.replace(/\d{12}(\d{4})/, "############$1")
    }
    */
  }
};

export default validator;
