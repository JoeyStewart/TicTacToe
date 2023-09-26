// Query Selectors
var gameChip = document.querySelectorAll(".move")
var player1ScoreTally = document.querySelector('#player1-scores')
var player2ScoreTally = document.querySelector('#player2-scores')

//Element by ID
var playerWinner = document.getElementById('player-result')

// Event Listeners
gameChip.forEach(cell => {cell.addEventListener("click", playerSelect)})

// window.addEventListener('load', playerSelect)
window.addEventListener('load', initializeGame)

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


player1Score = 0
player2Score = 0

// Functions

function initializeGame(){
    player1ScoreTally.textContent = `${player1Score} Wins`
    player2ScoreTally.textContent = `${player2Score} Wins`
    playerWinner.textContent = `${currentPlayer}'s Turn!`
}

function playerSelect(event){
    var cell = event.target
    if(!cell.innerText){
        if(currentPlayer === '🦑'){ 
            cell.innerText = player1
            currentPlayer = '🧙🏼‍♂️'
        }else{
            cell.innerText = player2
            currentPlayer = '🦑'
        }
    var winner = winConditionMet()
    updateWinnerMessage(winner)
    if(winner || isDraw()){
        disableCell()
    }
        
    }
}

function winConditionMet(){
    for(var i =0; i < winCombo.length; i++){
        var [a,b,c] = winCombo[i]
        if(gameChip[a].innerText &&
            gameChip[a].innerText === gameChip[b].innerText &&
            gameChip[a].innerText === gameChip[c].innerText){
                if(gameChip[a].innerText === player1){
                return '🦑'
                }else if(gameChip[a].innerText === player2){
                    return '🧙🏼‍♂️'
                }
            }
        }
    return null
}

function increaseWins(){
    player1ScoreTally.textContent = `${player1Score} Wins`
    player2ScoreTally.textContent = `${player2Score} Wins`
}

function updateWinnerMessage(winner){
    if(winner){
        playerWinner.textContent = `${winner} won!`
        if(winner === '🦑'){
            player1Score += 1
        }else if(winner === '🧙🏼‍♂️'){
            player2Score += 1
        }
        increaseWins()
    }else if (isDraw()){
        playerWinner.textContent = '☠️Draw☠️'
    }else{
        playerWinner.textContent = `${currentPlayer}'s Turn!`
    }
    if(winner || isDraw()){
        setTimeout(function(){restartGame()}, 1200)
    }
}

function isDraw(){
    for(var i = 0; i < gameChip.length; i++){
        if(!gameChip[i].innerText){
            return false
        }
    }
    return true
}


function disableCell(){
    gameChip.forEach(cell => {cell.removeEventListener('click', playerSelect)})
}

function restartGame(){
    gameChip.forEach(cell => {cell.innerText = ''})
    currentPlayer = currentPlayer
    updateWinnerMessage()
    gameChip.forEach(cell => {cell.addEventListener('click', playerSelect)})
}






