/* ROSHAMBO WITH UI */

/*****************************
 * create constants for elements
*/ 

document.addEventListener('DOMContentLoaded', function() {
  

const playBtn = document.querySelector(".play-btn");
const scoreContainer = document.querySelector(".score-container");
const scoreHeader = document.querySelectorAll("h3");
playBtn.addEventListener('click', function(e) {
    playBtn.style.display = "none";
    scoreContainer.style.display = "flex";
    scoreHeader.forEach(element => {
        element.style.display = "block";
    });

});

/*******************************************************
    when playBtn.style.display === "none"
    event listeners for clicks on div-img
    when div-img clicked
        calculate random num for computer
        compare with string for clicked
        update score + show animation???
    when player or comp score === 5, game over

    elements required
        tie-cur-score
        user-cur-score
        comp-cur-score
        user-onclick
*******************************************************/

// Payer Selection
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
// Variables to update score
const userScore = document.querySelector(".user-cur-score");
const tieScore = document.querySelector(".tie-cur-score");
const compScore = document.querySelector(".comp-cur-score");

rock.addEventListener('click', function(e) {
    if (playBtn.style.display === '') return;
    let compSelect = getCompSelection();
    
    if (compSelect == "rock") {
        tieScore.textContent = Number(tieScore.textContent) + 1;
    } else if (compSelect == "paper") {
        compScore.textContent = Number(compScore.textContent) + 1;
    } else if (compSelect == "scissors") {
        userScore.textContent = Number(userScore.textContent) + 1;
    };

});

paper.addEventListener('click', function(e) {
    if (playBtn.style.display === '') return;
    let compSelect = getCompSelection();
    
    if (compSelect == "rock") {
        userScore.textContent = Number(userScore.textContent) + 1;
    } else if (compSelect == "paper") {
        tieScore.textContent = Number(tieScore.textContent) + 1;
    } else if (compSelect == "scissors") {
        compScore.textContent = Number(compScore.textContent) + 1;
    };

});
scissors.addEventListener('click', function(e) {
    if (playBtn.style.display === '') return;
    let compSelect = getCompSelection();
    
    if (compSelect == "rock") {
        compScore.textContent = Number(compScore.textContent) + 1;
    } else if (compSelect == "paper") {
        userScore.textContent = Number(userScore.textContent) + 1;
    } else if (compSelect == "scissors") {
        tieScore.textContent = Number(tieScore.textContent) + 1;
    };

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

}


});
