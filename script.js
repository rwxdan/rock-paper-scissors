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

const playGame = () => {
	let choices = document.querySelectorAll(".choice");
	for (let item = 0; item < choices.length; item++) {
		choices[item].addEventListener("click", () => {
			const playerChoice = choices[item].id;
			if (!playerChoice) return;
			result.textContent = `Result: ${playRound(
				playerChoice,
				getComputerChoice()
			)}`;
			pScore.textContent = `Player score: ${playerScore}`;
			compScore.textContent = `Computer score: ${computerScore}`;
			if (playerScore >= 5 || computerScore >= 5) {
				if (playerScore >= 5) {
					result.textContent = "You won the game!";
					pScore.textContent = "";
					compScore.textContent = "";
				} else if (computerScore >= 5) {
					result.textContent = "Computer won the game!";
					pScore.textContent = "";
					compScore.textContent = "";
				}
				return;
			}
		});
	}
};

playGame();
