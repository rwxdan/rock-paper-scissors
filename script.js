// Initialize score and rounds
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

const container = document.getElementById("container");
const result = document.createElement("p");
container.appendChild(result);

const pScore = document.createElement("p");
container.appendChild(pScore);
const compScore = document.createElement("p");
container.appendChild(compScore);

function play() {
	document.getElementById("rock").addEventListener("click", () => {
		if (playerScore == 5 || computerScore == 5) {
			if (playerScore == 5) {
				result.textContent = "You won the game!";
			} else if (computerScore == 5) {
				result.textContent = "Computer won the game!";
			}
		} else {
			result.textContent = playRound("rock", getComputerChoice());
			pScore.textContent = `Player score: ${playerScore}`;
			compScore.textContent = `Computer score: ${computerScore}`;
		}
	});
	document.getElementById("paper").addEventListener("click", () => {
		if (playerScore == 5 || computerScore == 5) {
			if (playerScore == 5) {
				result.textContent = "You won the game!";
			} else if (computerScore == 5) {
				result.textContent = "Computer won the game!";
			}
		} else {
			result.textContent = playRound("paper", getComputerChoice());
			pScore.textContent = `Player score: ${playerScore}`;
			compScore.textContent = `Computer score: ${computerScore}`;
		}
	});
	document.getElementById("scissors").addEventListener("click", () => {
		if (playerScore == 5 || computerScore == 5) {
			if (playerScore == 5) {
				result.textContent = "You won the game!";
			} else if (computerScore == 5) {
				result.textContent = "Computer won the game!";
			}
		} else {
			result.textContent = playRound("scissors", getComputerChoice());
			pScore.textContent = `Player score: ${playerScore}`;
			compScore.textContent = `Computer score: ${computerScore}`;
		}
	});
}

play();
