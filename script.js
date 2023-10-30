const allMoves = ['rock', 'paper', 'scissors'];

const message = document.querySelector('.message');
const resultPlayer = document.querySelector('.result-player');
const scorePlayer = document.querySelector('.score-player');
const resultComputer = document.querySelector('.result-computer');
const scoreComputer = document.querySelector('.score-computer');
const moves = document.querySelectorAll('.move');
const playAgain = document.querySelector('button[value="play-again"]');

let hasGameEnded = false;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return allMoves[Math.floor(Math.random() * 3)];
}

function playRound(playerMove, computerMove) {
  displayMove(playerMove, computerMove);

  if (playerMove === computerMove) {
    message.textContent = 'TIE! NO ONE WINS THIS ROUND...';
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors')
    || (playerMove === 'paper' && computerMove === 'rock')
    || (playerMove === 'scissors' && computerMove === 'paper')) {
    message.textContent = `YAY! ${playerMove.toUpperCase()} BEATS ${computerMove.toUpperCase()}...`;
    playerScore++;
    scorePlayer.textContent = `PLAYER : ${playerScore}`;
  } else if (
    (computerMove === 'rock' && playerMove === 'scissors')
    || (computerMove === 'paper' && playerMove === 'rock')
    || (computerMove === 'scissors' && playerMove === 'paper')) {
    message.textContent = `UNLUCKY! ${playerMove.toUpperCase()} LOSES TO ${computerMove.toUpperCase()}...`;
    computerScore++;
    scoreComputer.textContent = `COMPUTER : ${computerScore}`;
  }
}

function displayMove(playerMove, computerMove) {
  removeIcons();
  loadIcon(playerMove, 'player');
  loadIcon(computerMove, 'computer');
}

function removeIcons() {
  const movePlayer = resultPlayer.querySelector('.move-player');
  const moveComputer = resultComputer.querySelector('.move-computer');

  if (movePlayer !== null && moveComputer !== null) {
    movePlayer.remove();
    moveComputer.remove();
  }
}

function loadIcon(move, target) {
  const img = document.createElement('img');

  switch (move) {
    case 'rock':
      img.src = './icons/hand-back-fist-solid.svg';
      img.alt = 'Rock';
      img.classList.add('rock');
      break;
    case 'paper':
      img.src = './icons/hand-solid.svg';
      img.alt = 'Paper';
      img.classList.add('paper');
      break;
    case 'scissors':
      img.src = './icons/hand-scissors-solid.svg';
      img.alt = 'Scissors';
      img.classList.add('scissors');
  }
  
  if (target === 'player') {
    img.classList.add('move-player');
    resultPlayer.prepend(img);
  } else if (target === 'computer') {
    img.classList.add('move-computer');
    resultComputer.prepend(img);
  }
}

function checkGameState() {
  if (playerScore === 5 || computerScore === 5) {
    moves.forEach(move => move.setAttribute('disabled', ''));
    playAgain.removeAttribute('disabled');
    hasGameEnded = true;
    message.classList.remove('blink');
    if (playerScore === 5) {
      message.textContent = 'CONGRATULATIONS! YOU WON THE BEST OF 5!';
    } else if (computerScore === 5) {
      message.textContent = 'BUMMER! BETTER LUCK NEXT TIME!';
    }
    message.classList.add('fade');  
  }
}

function reset() {
  moves.forEach(move => move.removeAttribute('disabled'));
  playAgain.setAttribute('disabled', '');
  hasGameEnded = false;
  playerScore = 0;
  computerScore = 0;
  message.classList.remove('fade');
  message.textContent = 'CHOOSE A MOVE TO START GAME';
  message.classList.add('blink');
  removeIcons();
  scorePlayer.textContent = 'PLAYER : 0';
  scoreComputer.textContent = 'COMPUTER : 0';
}

moves.forEach(move => move.addEventListener('click', e => {
  if (!hasGameEnded) {
    if (message.classList.contains('blink')) {
      message.classList.remove('blink');
    }
    playRound(e.target.value, getComputerChoice());
  }
  checkGameState();
}))

playAgain.addEventListener('click', () => reset());
