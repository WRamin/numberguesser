let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 10)
}

function compareGuesses(humanGuess, computerGuess, target) {
    if (Math.abs(target - humanGuess) < Math.abs(target - computerGuess)) {
        return true
    } else if (Math.abs(target - computerGuess) < Math.abs(target - humanGuess)) {
        return false
    } else if (humanGuess <= target && computerGuess <= target) {
        return true
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1
    } else if (winner === 'computer') {
        computerScore += 1
    }
}

function advanceRound() {
    currentRoundNumber += 1
}