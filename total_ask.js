//Problem-01 : Train TT's Fine Calculator 
function totalFine( fare ) {
          // You have to write your code here


          if(typeof fare !== 'number' || fare <=0){
            return 'Invalid';
          }
          let find=fare + (fare * 0.20) +30;
          return find;
     
}

// Problem-02 : Clean & Capitalize Characters

function  onlyCharacter( str ) {
          // You have to write your code here


          if( typeof str !== 'string'){
            return 'Invalid';

          }
          else{
            return str.replace(/\s+/g, '').toUpperCase();

          }

}


// Problem-03 : FIFA Best Team Award 

function bestTeam(player1, player2) {
     // You have to write your code here

    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null || Array.isArray(player1) || Array.isArray(player2)) {
        return "Invalid";
    }
    let team1 = player1.foul + player1.cardY + player1.cardR;
    let team2 = player2.foul + player2.cardY + player2.cardR;

    if (team1 < team2) {
        return player1.name;
    } else if (team2< team1) {
        return player2.name;
    } else {
        return "Tie";
    }
}


// Problem-04: Same Same But Different  😕 

function isSame(arr1, arr2) {
     // You have to write your code here
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

   
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    
    return true;
}






// Problem-05: Exam Result Report Generator



function  resultReport( marks ) {
          // You have to write your code here

           if (!Array.isArray(marks)) {
        return "Invalid";
    }

    
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let total = 0;
    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    let average = Math.round(total / marks.length);

    return {
        finalScore: average,
        pass: passCount,
        fail: failCount
    };
}







