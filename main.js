// Query Selectors
var gameChip = document.querySelectorAll(".move")
// var player1Score = document.getElementById('player1-score').textContent
// var player2Score = document.getElementById('player2-score').textContent
// document.getElementById('player-result').textContent

// Event Listeners
gameChip.forEach(chip => {
    chip.addEventListener("click", gameChipSelect);
})

//Variables
var player1 = '🦑'
var player2 = '🧙🏼‍♂️'
var currentPlayer = 'player1'
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

var player1Score = 0
var player2Score = 0
// Functions

// //Function: Recognize Click on Grid
function gameChipSelect(event) {
    var cell = event.target;
    if(!cell.innerText){
        if(currentPlayer === 'player1'){ 
            cell.innerText = player1;
            currentPlayer = 'player2'
        } else {
            cell.innerText = player2;
            currentPlayer = 'player1'
        }
        var winner = winConditionMet()
        updateWinnerMessage(winner)
        whoWon()
    }
    console.log("Execute Please")
}



//Function: Recognize a win condition on the grid. Ends game. 
//Needs ability to clear grid to continue another game.
function winConditionMet(){
    for(var i =0; i < winCombo.length; i++){
        console.log(winCombo[1])
        var [a,b,c] = winCombo[i]
        if( gameChip[a].innerText &&
            gameChip[a].innerText === gameChip[b].innerText &&
            gameChip[a].innerText === gameChip[c].innerText){
                var winner = currentPlayer === 'player1' ? '🦑' : '🧙🏼‍♂️';
                document.getElementById('player-result').textContent = `${winner} Won!`;
                return `${currentplayer.innerText} Won!`
            }
        // // if(cell.innerText = winCombo[i])
        // // return `${currentPlayer} won!`
        // return null
    }
}
//Function: displays on the screen which player won. If statement needed
function updateWinnerMessage(winner) {
    var playerWinner = document.getElementById('winner');
    if (winner) {
        playerWinner.textContent = `${winner} won!`;
    }
}

function whoWon(){
    var winner = winConditionMet()
        if(winner === 'player1'){
            return player1Score += 1
        } else if(winner === 'player2'){
            return player2Score += 1
        }
}

document.getElementById('player1-score').textContent = player1Score
document.getElementById('player2-score').textContent = player2Score
//Function: gives a draw. Will be invoked in whoWon function. 
function isDraw(){

}

function endGame(){
    if(!winConditionMet){

    }
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
// function player1Score(){
//     if()
// }

// function player2Score(){

// }

