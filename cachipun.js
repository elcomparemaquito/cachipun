function getComputerChoice(){
    let opcionesCachipun = ["rock","paper","scissors"];
    let computerChoice = opcionesCachipun[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getPlayerChoice(){
    let selection = prompt("rock, paper or scissors=");
    let playerChoice = selection.toLowerCase()
    return playerChoice
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "You Tie!"
    }
    let solutions = {"rockscissors": "You Win! Rock beats Scissors", "rockpaper": "You Lose! Paper beats Rock!", "scissorsrock": "You Lose! Rock beats Scissors", "scissorspaper": "You Win! Scissors beats Paper", "paperrock": "You Win! Paper beats Rock", "paperscissors": "You Lose! Scissors beats Paper"};
    let result = playerSelection + computerSelection
    return solutions[result]
  }

function game(){
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        let resultado = playRound(playerSelection,computerSelection)
        console.log(resultado)
    }
}

game()
