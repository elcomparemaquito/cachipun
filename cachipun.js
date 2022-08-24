function getComputerChoice(){
    let opcionesCachipun = ["rock","paper","scissors"];
    return opcionesCachipun[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "You Tie!"
    }
    let solutions = {rockscissors: "You Win! Rock beats Scissors", rockpaper: "You Lose! Paper beats Rock!", scissorsrock: "You Lose! Rock beats Scissors", scissorspaper: "You Win! Scissors beats Paper", paperrock: "You Win! Paper beats Rock", paperscissors: "You Lose! Scissors beats Paper"};
    let result = playerSelection +computerSelection
    return solutions[result]
  }

function playerSelection(){
    let selection = prompt("rock, paper or scissors=");
    return selection.toLowerCase()
}
const computerSelection = getComputerChoice();

function game(){
    for (let i = 0; i < 5; i++) {
        let jugador = playerSelection()
        let computador = getComputerChoice()
        let resultado = playRound(jugador,computador)
        console.log(resultado)
    }
}

