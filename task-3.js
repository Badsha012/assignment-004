function bestTeam(player1, player2) {
    // Check if both inputs are objects
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null || Array.isArray(player1) || Array.isArray(player2)) {
        return "Invalid";
    }

    // Calculate total violations for each team
    let team1Violations = player1.foul + player1.cardY + player1.cardR;
    let team2Violations = player2.foul + player2.cardY + player2.cardR;

    // Compare and return the fairer team
    if (team1Violations < team2Violations) {
        return player1.name;
    } else if (team2Violations < team1Violations) {
        return player2.name;
    } else {
        return "Tie";
    }
}
console.log(bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
));