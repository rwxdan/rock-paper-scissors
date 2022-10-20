// Initialize score
let playerScore = 0;
let computerScore = 0;

// Computer choice
function getComputerChoice() {
	const SELECTION = ["rock", "paper", "scissors"];
	// Randomize result
	return SELECTION[Math.floor(Math.random() * SELECTION.length)];
}

// Evaluate selections
function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "It's a tie";
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		computerScore++;
		return "Computer wins! Paper beats rock";
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		playerScore++;
		return "You win! Paper beats rock";
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		computerScore++;
		return "Computer wins! Rock beats scissors";
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		playerScore++;
		return "You win! Rock beats scissors";
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		computerScore++;
		return "Computer wins! Scissors beats paper";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		playerScore++;
		return "You win! Scissors beats paper";
	}
}

function getChoices() {
	const playerChoice = prompt("Input: rock, paper or scissors").toLowerCase();
	const computerChoice = getComputerChoice();
	console.log(playRound(playerChoice, computerChoice));
}

// Repeat game for 5 rounds
function game() {
	for (let round = 0; round < 5; round++) getChoices();
	// Get Counter and display winner
	if (playerScore >= 3) {
		console.log("You won the game!");
	} else if (computerScore >= 3) {
		console.log("Computer won the game! Better luck next time.");
	} else {
		console.log("Complete tie.");
	}
}

game();
