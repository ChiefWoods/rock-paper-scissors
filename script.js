function getComputerChoice() {
  let choice;
  let number = Math.floor(Math.random() * 10);
  return (number <= 3 ? choice = "rock" : number > 3 && number <= 6 ? choice = "paper" : choice = "scissors");
}

function playRound(playerSelection, computerSelection) {
  chosenGuesses.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}...`;
  results.appendChild(chosenGuesses);

  function appendScore() {
    results.appendChild(roundResult);
    playerScore.textContent = `Player score = ${playerWins}`;
    computerScore.textContent = `Computer score = ${computerWins}`;
    results.appendChild(playerScore);
    results.appendChild(computerScore);
  }

  switch (playerSelection) {
    case 'rock':
      if (playerSelection == computerSelection) {
        roundResult.textContent = "No one wins this round";
        appendScore();
        break;
      }
      else if (computerSelection == "paper") {
        roundResult.textContent = "You lose! Paper beats rock";
        computerWins += 1;
        appendScore();
        break;
      }
      else roundResult.textContent = "You win! Rock beats scissors";
      playerWins += 1;
      appendScore();
      break;
    case 'paper':
      if (playerSelection == computerSelection) {
        roundResult.textContent = "No one wins this round";
        appendScore();
        break;
      }
      else if (computerSelection == "scissors") {
        roundResult.textContent = ("You lose! Scissors beats paper");
        computerWins += 1;
        appendScore();
        break;
      }
      else roundResult.textContent = ("You win! Paper beats rock");
      playerWins += 1;
      appendScore();
      break;
    case 'scissors':
      if (playerSelection == computerSelection) {
        roundResult.textContent = ("No one wins this round");
        appendScore();
        break;
      }
      else if (computerSelection == "rock") {
        roundResult.textContent = ("You lose! Rock beats scissors");
        computerWins += 1;
        appendScore();
        break;
      }
      else roundResult.textContent = ("You win! Scissors beats paper");
      playerWins += 1;
      appendScore();
      break;
  }

  if (playerWins >= 5) {
    endMessage.textContent = "Congratulations! You won the best of 5 in Rock-Paper-Scissors!";
    results.insertBefore(endMessage, chosenGuesses);
    buttons.forEach(button => button.setAttribute('disabled', ""));
  }
  else if (computerWins >= 5) {
    endMessage.textContent = "Bummer! Better luck next time!";
    results.insertBefore(endMessage, chosenGuesses);
    buttons.forEach(button => button.setAttribute('disabled', ""));
  }
}

var playerWins = 0;
var computerWins = 0;

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const chosenGuesses = document.createElement('h1');
const roundResult = document.createElement('p');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const endMessage = document.createElement('p');
buttons.forEach(button => button.addEventListener('click', () => {
  playRound(button.id, getComputerChoice());
}));

