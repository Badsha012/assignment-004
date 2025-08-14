function  onlyCharacter( str ) {
          // You have to write your code here


          if( typeof str !== 'string'){
            return 'Invalid';

          }
          else{
            return str.replace(/\s+/g, '').toUpperCase();

          }

}
let x=onlyCharacter(" ha ck m e 1 @ru.c  n  ");
console.log(x);
console.log(onlyCharacter("  h e llo wor   ld")); 

