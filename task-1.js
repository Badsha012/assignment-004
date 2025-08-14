function totalFine( fare ) {
          // You have to write your code here


          if(typeof fare !== 'number' || fare <=0){
            return 'Invalid';
          }
          let find=fare + (fare * .20) +30;
          return find;
     
}
let x= totalFine(552);
console.log(x);





