/* ROCK PAPER SCISSORS */

/* How the game will work
- generate a computer choice
- get a user input from the commandline
- compare the two answers
- determine the winner
*/

// define function for generating a computer response

function computerChoice() {
    let computerChoiceString;
    let randomNum = Math.floor((Math.random() * 10));

    if (randomNum >= 7) {
        computerChoiceString = "rock";
    } else if (randomNum < 7 && randomNum >= 4) {
        computerChoiceString = "paper";
    } else {
        computerChoiceString = "scissors";
    }

    return computerChoiceString;
};


// get user input and store it in a variable and function to check

function userChoice() {
    let userInputChoice = prompt("Rock, Paper, or Scissors?");
    userInputChoice = userInputChoice.toLowerCase();

    while (userInputChoice !== "rock" && userInputChoice !== "paper" &&
            userInputChoice !== "scissors") {
                userInputChoice = prompt("Rock, Paper, or Scissors?");
                userInputChoice = userInputChoice.toLowerCase();
            }

    return userInputChoice;
};

// play one round function

function playRound() {
    let playerSelection = userChoice();
    let computerSelection = computerChoice();
    let winner;

    if (playerSelection === "rock" && computerSelection == "rock") {
        alert("Rock vs Rock, it's a tie!");
        winner = "tie";
    } else if (playerSelection === "rock" && computerSelection == "paper") {
        alert("Rock vs Paper, you lose!");
        winner = "computer";
    } else if (playerSelection === "rock" && computerSelection == "scissors") {
        alert("Rock vs Scissors, you win!");
        winner = "player";
    } else if (playerSelection === "paper" && computerSelection == "paper") {
        alert("Paper vs Paper, it's a tie!");
        winner = "tie";
    } else if (playerSelection === "paper" && computerSelection == "scissors") {
        alert("Paper vs Scissors, you lose!");
        winner = "computer";
    } else if (playerSelection === "scissors" && computerSelection == "scissors") {
        alert("Scissors vs Scissors, it's a tie!");
        winner = "tie"
    }
    return winner;
}

// game with counters

function game() {
    let userScore = 0;
    let computerScore = 0;
    let tieGame = 0;

    for (let i = 0; i < 5; i++) {
        let matchWinner = playRound();

        if (matchWinner === "player") {
            userScore++;
        } else if (matchWinner === "computer") {
            computerScore++;
        }
    }

    if (userScore > computerScore) {
        alert("YOU WIN!");
    } else if (userScore < computerScore) {
        alert("YOU LOSE!");
    } else {
        alert("TIE!");
    }

    return 0;
}

//let x = game();