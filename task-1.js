function totalFine( fare ) {
          // You have to write your code here


          if(typeof fare !== 'number' || fare <=0){
            return 'Invalid';
          }
          else{
            return fare=fare+ (fare*0.20)+30;
          }
}
let x= totalFine(552);
console.log(x);



