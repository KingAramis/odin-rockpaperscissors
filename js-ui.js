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

});