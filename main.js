// Query Selectors
var gameChip = document.querySelector(".move")

// Event Listeners
gameChip.addEventListener("click", gameChipSelect);
// Functions

gameChip.forEach(move => {
    move.addEventListener('click', () => {
        gameChipSelect(move);
    });
});
// //Function: Recognize Click on Grid
function gameChipSelect(move) {
    if(!move.innerHTML){
        move.innerHTML = '🦑'
        move.classList.add(emoji)
    }
}


//Function: Recognize a win condition on the grid

//Function: Change above text in relation to player turn

//Function: Give result of game (Either draw or player winner) Affecting above function

//Function: Create tally for number of wins for each player.

//(p)Function: Clear screen to default at any time

