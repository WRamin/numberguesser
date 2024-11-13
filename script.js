let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    let target = Math.floor(Math.random() * 10)
}

function compareGuesses(userGuess, compGuess, target) {
    if (Math.abs(target - userGuess) < Math.abs(target - compGuess)) {
        return true
    } else if (Math.abs(target - compGuess) < Math.abs(target - userGuess)) {
        return true
    } else if (userGuess === target && compGuess === target) {
        return true
    }
}

function updateScore(str) {
    
}