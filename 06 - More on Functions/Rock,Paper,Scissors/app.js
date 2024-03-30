const startGameBtn = document.getElementById('start-game-btn');


const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
let gameIsRunning = false;
const WIN_VALUE = 'WIN';
const LOST_VALUE = 'LOST';
const DRAW_VALUE = 'DRAW';

const getUserChoice = function () {
    let selection = prompt('Rock, Paper or Scissors?', '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert('Invalid choice,We Choose Rock');
        return ROCK
    }
    return selection;

}
const getComputerChoice = function () {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}
const getWinner = function (cChoice, pChoice) {
    if (cChoice === pChoice) {
        return DRAW_VALUE


    }
    if (cChoice === ROCK && pChoice === SCISSORS
        || cChoice === PAPER && pChoice === ROCK
        || cChoice === SCISSORS && pChoice === ROCK) {
        return LOST_VALUE

    }
    if (pChoice === ROCK && cChoice === SCISSORS
        || pChoice === PAPER && cChoice === ROCK
        || pChoice === SCISSORS && cChoice === ROCK) {
        return WIN_VALUE

    }

}

startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return
    }
    gameIsRunning = true;
    console.log('Game is starting');
    const playerChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    console.log(winner);


})