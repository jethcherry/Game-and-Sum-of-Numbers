

// Objective: Create a two-player Rock Paper Scissors game in JavaScript, with one player being the user and the other being the computer.
 
// Requirements:
 
// Functionality:
 
// User selects their choice (rock, paper, or scissors) through buttons or user input.
// Computer randomly chooses its move (0-0.33 rock, 0.34-0.66 paper, 0.67-1 scissors).
// Winner is determined based on standard rock paper scissors rules.
// Display the result (win, lose, tie) and user/computer choices on the screen.
// Consider adding scorekeeping and a winner declaration for multiple rounds (optional).
// Code Structure:
 
// Use at least one function declaration.
// Use at least one function expression.
// Use at least one arrow function.
// Use at least one anonymous function.
// Use a ternary operator for a concise outcome display 
// Utilize default parameters in a function
 
// Cheat Mode:
 
// Design a "cheat mode" feature that alters the computer's choice in some way (optional).
// Come up with one specific implementation of cheat mode (e.g., computer always chooses scissors).
 
 
let userScore = 0;
let computerScore = 0;


function play(userChoice) {
  const computerChoice = displayComputerChoice();

  const result = getResult(userChoice, computerChoice);


  document.getElementById('result').innerText = result;


  if (result === 'You Win!') {
    userScore++;
  } else if (result === 'You Lose!') {
    computerScore++;
  }
  document.getElementById('user-score').innerText = userScore;
  document.getElementById('computer-score').innerText = computerScore;
}


const displayComputerChoice = function() {
  const randomNum = Math.random();
  if (randomNum < 0.34) {
    return 'rock';
  } else if (randomNum < 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
};


const getResult = (user, computer) => {
  if (user === computer) return 'It\'s a Tie!';
  if ((user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')) {
    return 'You Win!';
  } else {
    return 'You Lose!';
  }
};


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('result').innerText = 'Make your choice!';
});


const getOutcome = (result) => {
  return result === 'It\'s a Tie!' ? 'Tie' : result === 'You Win!' ? 'Win' : 'Lose';
};


const CheatMode = (userChoice, cheatMode = false) => {
  if (cheatMode) {
    return 'scissors'; 
  } else {
    return displayComputerChoice();
  }
};
