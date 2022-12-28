var playerChoice, computerChoice, round = playerWins = computerWins = 0, chosenChoices, outcome, playerScore, computerScore, endMessage;

const main = document.querySelector('main');
const intro = document.querySelector('.intro');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');

function initialize() {
  chosenChoices = document.createElement('h3');
  outcome = document.createElement('p');
  playerScore = document.createElement('p');
  computerScore = document.createElement('p');
  endMessage = document.createElement('h3');
  results.append(chosenChoices, outcome, playerScore, computerScore, endMessage);
}

function incrementRound() {
  round++;
  intro.textContent = `Round ${round}`;
}

function playRound() {
  getComputerChoice();
  chosenChoices.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}...`;
  switch (true) {
    case (playerChoice == computerChoice):
      outcome.textContent = `Tie! No one wins this round.`;
      break;
    case (playerChoice == 'rock' && computerChoice == 'scissors'):
    case (playerChoice == 'paper' && computerChoice == 'rock'):
    case (playerChoice == 'scissors' && computerChoice == 'paper'):
      outcome.textContent = `${capitalize(playerChoice)} beats ${computerChoice}! Nice one!`;
      playerWins++;
      break;
    case (playerChoice == 'rock' && computerChoice == 'paper'):
    case (playerChoice == 'paper' && computerChoice == 'scissors'):
    case (playerChoice == 'scissors' && computerChoice == 'rock'):
      outcome.textContent = `${capitalize(computerChoice)} beats ${playerChoice}! Unlucky...`;
      computerWins++;
      break;
  }
  playerScore.textContent = `Player score = ${playerWins}`;
  computerScore.textContent = `Computer score = ${computerWins}`;
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return computerChoice = choice[Math.floor(Math.random() * 3)];
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function hasGameEnded() {
  if (playerWins == 5 || computerWins == 5) {
    buttons.forEach(button => button.setAttribute('disabled', ""));
    const restart = document.createElement('button');
    restart.textContent = 'Play Again';
    main.appendChild(restart);
    if (playerWins == 5) {
      endMessage.textContent = "Congratulations! You won the best of 5!";
    } else {
      endMessage.textContent = "Bummer! Better luck next time!";
    }
    restart.addEventListener('click', () => {
      restart.remove();
      round = playerWins = computerWins = 0;
      while (results.firstChild) {
        results.firstChild.remove();
      }
      buttons.forEach(button => button.removeAttribute('disabled'));
      intro.textContent = "Select one of the moves below to start a new game...";
    });
  }
}

buttons.forEach(button => button.addEventListener('click', () => {
  if (round == 0) {
    initialize();
  }
  incrementRound();
  playerChoice = button.value;
  playRound();
  hasGameEnded();
}));