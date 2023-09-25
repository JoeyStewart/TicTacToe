// Query Selectors
var gameChip = document.querySelectorAll(".move")
// var player1Score = document.getElementById('player1-score').textContent
// var player2Score = document.getElementById('player2-score').textContent

// Event Listeners
gameChip.forEach(cell => {cell.addEventListener("click", gameChipSelect)})

//Variables
var player1 = '🦑'
var player2 = '🧙🏼‍♂️'
var currentPlayer = '🦑'
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
function gameChipSelect(event) {
    var cell = event.target;
    if(!cell.innerText){
        if(currentPlayer === '🦑'){ 
            cell.innerText = player1;
            currentPlayer = '🧙🏼‍♂️'
        } else {
            cell.innerText = player2;
            currentPlayer = '🦑'
        }
        var winner = winConditionMet();
        updateWinnerMessage(winner);
    }
}

function winConditionMet(){
    for(var i =0; i < winCombo.length; i++){
        var [a,b,c] = winCombo[i]
        if( gameChip[a].innerText &&
            gameChip[a].innerText === gameChip[b].innerText &&
            gameChip[a].innerText === gameChip[c].innerText){
                if(gameChip[a].innerText === player1){
                return '🦑';
                } else if(gameChip[a].innerText === player2) {
                    return '🧙🏼‍♂️';
                }
            }
        }
    return  
}

function updateWinnerMessage(winner) {
    console.log(winner)
    var playerWinner = document.getElementById('player-result');
    if (winner) {
        playerWinner.textContent = `${winner} won!`;
    } else if (isDraw()) {
        playerWinner.textContent = 'Draw';
    } else {
        playerWinner.textContent = `${currentPlayer}'s Turn!`;
    }
    if(winner || isDraw()){
        setTimeout(function(){restartGame()}, 1200)
    }
}


function isDraw() {
    for (var i = 0; i < gameChip.length; i++) {
        if (!gameChip[i].innerText) {
            return false; 
        }
    }
    return true; 
}

function restartGame(){
    gameChip.forEach(cell => {cell.innerText = ''})
    currentPlayer = '🦑'
    updateWinnerMessage()
}

function winnerTally(){
    var winner = winConditionMet()
        if(winner === 'player1'){
            return player1Score += 1
        } else if(winner === 'player2'){
            return player2Score += 1
        }
}

// document.getElementById('player1-score').textContent = player1Score
// document.getElementById('player2-score').textContent = player2Score

//Functions may not be needed. May be invoked in winnerTally() function.
function player1Score(){
    
}

function player2Score(){

}

