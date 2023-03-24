/* ROSHAMBO WITH UI */

/*****************************
 * create constants for elements
*/ 

document.addEventListener('DOMContentLoaded', function() {
  

const playBtn = document.querySelector(".play-btn");
const scoreContainer = document.querySelector(".score-container");
const scoreHeader = document.querySelectorAll("h3");
// Payer Selection
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
// Variables to update score
const userScore = document.querySelector(".user-cur-score");
const tieScore = document.querySelector(".tie-cur-score");
const compScore = document.querySelector(".comp-cur-score");
// popup variables
const popup = document.querySelector(".popup");
const nextBtn = document.querySelector(".next-btn");
const popupContent = document.querySelector(".popup-content");
const endBtn = document.querySelector(".end-btn");

playBtn.addEventListener('click', function(e) {
    playBtn.style.display = "none";
    scoreContainer.style.display = "flex";
    scoreHeader.forEach(element => {
        element.style.display = "block";
    });
});

rock.addEventListener('click', function(e) {
    if (playBtn.style.display === '') return;
    let compSelect = getCompSelection();
    
    if (compSelect == "rock") {
        tieScore.textContent = Number(tieScore.textContent) + 1;
        popupContent.textContent = "ROCK VS. ROCK : TIE";
    } else if (compSelect == "paper") {
        compScore.textContent = Number(compScore.textContent) + 1;
        popupContent.textContent = "ROCK VS. PAPER : LOSS";
    } else if (compSelect == "scissors") {
        userScore.textContent = Number(userScore.textContent) + 1;
        popupContent.textContent = "ROCK VS. SCISSORS : WIN";
    };
    checkForWinner();
});

paper.addEventListener('click', function(e) {
    if (playBtn.style.display === '') return;
    let compSelect = getCompSelection();
    
    if (compSelect == "rock") {
        userScore.textContent = Number(userScore.textContent) + 1;
        popupContent.textContent = "PAPER VS. ROCK : WIN";
    } else if (compSelect == "paper") {
        tieScore.textContent = Number(tieScore.textContent) + 1;
        popupContent.textContent = "PAPER VS. PAPER : TIE";
    } else if (compSelect == "scissors") {
        compScore.textContent = Number(compScore.textContent) + 1;
        popupContent.textContent = "PAPER VS. SCISSORS : LOSS";
    };
    checkForWinner();
});

scissors.addEventListener('click', function(e) {
    if (playBtn.style.display === '') return;
    let compSelect = getCompSelection();
    
    if (compSelect == "rock") {
        compScore.textContent = Number(compScore.textContent) + 1;
        popupContent.textContent = "SCISSORS VS. ROCK : LOSS";
    } else if (compSelect == "paper") {
        userScore.textContent = Number(userScore.textContent) + 1;
        popupContent.textContent = "SCISSORS VS. PAPER : WIN";
    } else if (compSelect == "scissors") {
        tieScore.textContent = Number(tieScore.textContent) + 1;
        popupContent.textContent = "SCISSORS VS. SCISSORS : TIE";
    };
    checkForWinner();
});


// get random number and assign rps to compSelect, return string
function getCompSelection() {
    let computerChoiceString;
    let randomNum = Math.floor((Math.random() * 10));
    if (randomNum >= 6.6) {
        computerChoiceString = "rock";
    } else if (randomNum < 6.6 && randomNum >= 3.3) {
        computerChoiceString = "paper";
    } else {
        computerChoiceString = "scissors";
    };
    return computerChoiceString;
};

function revealPopUp() {
    nextBtn.textContent = "NEXT";
    popup.style.display = "flex";
    nextBtn.addEventListener('click', function(e) {
        popup.style.display = "none";
    });
};

function checkForWinner() {
    if (Number(userScore.textContent) === 5) {
        popupContent.textContent = "YOU WIN!"
        nextBtn.style.display = "none";
        endBtn.style.display = "block";
        popup.style.display = "flex";
        endBtn.addEventListener('click', function(e) {
            popup.style.display = "none";
            userScore.textContent = "0";
            compScore.textContent = "0";
            tieScore.textContent = "0";
            endBtn.style.display = "none";
            nextBtn.style.display = "block";
        });
    } else if (Number(compScore.textContent) === 5) {
        popupContent.textContent = "YOU LOSE!"
        nextBtn.style.display = "none";
        endBtn.style.display = "block";
        popup.style.display = "flex";
        endBtn.addEventListener('click', function(e) {
            popup.style.display = "none";
            userScore.textContent = "0";
            compScore.textContent = "0";
            tieScore.textContent = "0";
            endBtn.style.display = "none";
            nextBtn.style.display = "block";
        });
    } else {
        revealPopUp();
    };
};


});
