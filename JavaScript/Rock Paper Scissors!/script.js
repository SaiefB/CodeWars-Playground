const rps = (p1, p2) => {
    if (p1 === p2) {
        console.log("Draw!")
        return "Draw!"
    } else if (p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock") {
        console.log("Player 1 won!")
        return "Player 1 won!"
    } else if (p1 === "rock" && p2 === "paper" || p1 === "paper" && p2 === "scissors" || p1 === "scissors" && p2 === "rock") {
        console.log("Player 2 won!")
        return "Player 2 won!"
    } else {
        return "Check your spelling :)"
    }
};

rps("scissors", "scissors")