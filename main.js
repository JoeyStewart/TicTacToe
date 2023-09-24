// Query Selectors
var gameChip = document.querySelector("[data-cell")

// Event Listeners
gameChip.addEventListener("click", gameChipSelect);

//Variables
var player1 = '🦑'
var player2 = '🧙🏼‍♂️'
var player1Start = false //Use to have player 1 always start game.
var winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
// Functions

// //Function: Recognize Click on Grid
function gameChipSelect(move) {
    if(!move.innerHTML){
        move.classList.add(emoji)
    }
}

gameChip.forEach(move => {
    move.addEventListener('click', () => {
        gameChipSelect(move);
    });
});


//Function: Recognize a win condition on the grid. Ends game. 
//Needs ability to clear grid to continue another game.
function winConditionMet(){

}
//Function: displays on the screen which player won
function whoWon(){

}
//Function: gives a draw. Will be invoked in whoWon function. 
function isDraw(){

}
//Function: Create tally for number of wins for each player. Will continually
//add tallies if game continues. If a draw no tally is created.
//WinConditionMet will most likely be invoked here so that a tally will be displayed
//in the appropriate player tracker.
function winnerTally(){

}


//Function: Restart button? May add to restart game at anytime. Clearing all tallies tracked
function gameRestart(){

}

//Functions may not be needed. May be invoked in winnerTally() function.
function player1Score(){

}

function player2Score(){

}

