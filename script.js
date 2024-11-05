let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    let target = Math.floor(Math.random() * 10)
}

function compareGuesses(userGuess, compGuess, tarGuess) {
    let closest;
    if (userGuess === target || compGuess === target) {
        return  
    }
    else if (Math.abs(target - userGuess) < Math.abs(target - compGuess)) {
        closest = userGuess;
    } else if (Math.abs())
}