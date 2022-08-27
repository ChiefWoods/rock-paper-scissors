function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return computerChoice = choice[Math.floor(Math.random() * 3)];
}

function roundCounter() {
  round += 1;
  roundsPlayed.textContent = `Round ${round}`;
}

function roundOutcome() {
  chosenChoices.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}...`;
  switch (true) {
    case (playerChoice == computerChoice):
      outcome.textContent = `Tie! No one wins this round.`;
      break;
    case (playerChoice == 'rock' && computerChoice == 'scissors'):
    case (playerChoice == 'paper' && computerChoice == 'rock'):
    case (playerChoice == 'scissors' && computerChoice == 'paper'):
      firstWord = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
      outcome.textContent = `${firstWord} beats ${computerChoice}! Nice one.`;
      playerWins++;
      break;
    case (playerChoice == 'rock' && computerChoice == 'paper'):
    case (playerChoice == 'paper' && computerChoice == 'scissors'):
    case (playerChoice == 'scissors' && computerChoice == 'rock'):
      firstWord = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      outcome.textContent = `${firstWord} beats ${playerChoice}! Unlucky...`;
      computerWins++;
      break;
  }
}

function hasGameEnded() {
  if (playerWins == 5 || computerWins == 5) {
    buttons.forEach(button => button.setAttribute('disabled', ""));
    const restart = document.createElement('button');
    restart.textContent = 'Play Again?';
    document.body.appendChild(restart);
    restart.addEventListener('click', () => {
      reset();
      restart.remove();
    });
    if (playerWins == 5) {
      endMessage.textContent = "Congratulations! You won the best of 5 in Rock-Paper-Scissors!";
    }
    else {
      endMessage.textContent = "Bummer! Better luck next time!";
    }
  }
}

function reset() {
  round = 0, playerWins = 0, computerWins = 0;
  while (results.firstChild) {
    results.firstChild.remove();
  }
  buttons.forEach(button => button.removeAttribute('disabled'));
  introMessage.style.display = 'block';
}

function initialize() {
  roundsPlayed = document.createElement('h2');
  chosenChoices = document.createElement('h2');
  outcome = document.createElement('p');
  playerScore = document.createElement('p');
  computerScore = document.createElement('p');
  endMessage = document.createElement('h3');
  results.append(roundsPlayed, chosenChoices, outcome, playerScore, computerScore, endMessage);
}

function playGame() {
  buttons.forEach(button => button.addEventListener('click', () => {
    if (round == 0) {
      initialize();
      introMessage.style.display = 'none';
    }
    playerChoice = button.getAttribute('class');
    getComputerChoice();
    roundCounter();
    roundOutcome();
    hasGameEnded();
    playerScore.textContent = `Player score = ${playerWins}`;
    computerScore.textContent = `Computer score = ${computerWins}`;
  }));
}

var playerChoice, computerChoice, firstWord, round = 0, playerWins = 0, computerWins = 0;
var roundsPlayed, chosenChoices, outcome, playerScore, computerScore, endMessage;

const introMessage = document.querySelector('.intro');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');

playGame();