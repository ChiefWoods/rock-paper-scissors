function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const computerChoice = choice[Math.floor(Math.random() * 3)];
  return computerChoice;
}