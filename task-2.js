function  onlyCharacter( str ) {
          // You have to write your code here


          if( typeof str !== 'string'){
            return 'Invalid';

          }
          else{
            return str.replace(/\s+/g, '').toUpperCase();

          }

}


