function getComputerChoice() {
  let choice;
  let number = Math.floor(Math.random() * 10);
  return (number <= 3 ? choice = "rock" : number > 3 && number <= 6 ? choice = "paper" : choice = "scissors");
}

function playRound(playerSelection, computerSelection) {
  console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}...`);

  switch (playerSelection) {
    case 'rock':
      if (playerSelection == computerSelection) {
        console.log("No one wins this round");
        break;
      }
      else if (computerSelection == "paper") {
        console.log("You lose! Paper beats rock");
        computerWins += 1;
        break;
      }
      else console.log("You win! Rock beats scissors");
      playerWins += 1;
      break;
    case 'paper':
      if (playerSelection == computerSelection) {
        console.log("No one wins this round");
        break;
      }
      else if (computerSelection == "scissors") {
        console.log("You lose! Scissors beats paper");
        computerWins += 1;
        break;
      }
      else console.log("You win! Paper beats rock");
      playerWins += 1;
      break;
    case 'scissors':
      if (playerSelection == computerSelection) {
        console.log("No one wins this round");
        break;
      }
      else if (computerSelection == "rock") {
        console.log("You lose! Rock beats scissors");
        computerWins += 1;
        break;
      }
      else console.log("You win! Scissors beats paper");
      playerWins += 1;
      break;
  }
}

function game() {
  var playerSelection;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Enter 'rock', 'paper' or 'scissors':").toLowerCase();
    while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
      playerSelection = prompt("Invalid input! Please enter either 'rock', 'paper' or 'scissors':").toLowerCase();
    }
    playRound(playerSelection, getComputerChoice());
  }
  if (playerWins > computerWins) {
    console.log("Congratulations! You won the best of 5 in Rock-Paper-Scissors!");
  }
  else if (playerWins < computerWins) {
    console.log("Bummer! Better luck next time!");
  }
  else console.log("Tie! Both you and the computer ended the game with the same points");
}

var playerWins = 0;
var computerWins = 0;
game();
