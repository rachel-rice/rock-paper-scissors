function getComputerChoice(){
    let computerChoice = Math.random();
    if(computerChoice < .34){
        return "rock";
    }else if(computerChoice <=.67){
        return "paper";
    }else{
        return "scissors";
    } 
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() ==='paper' || playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() ==='scissors' || playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() ==='rock'){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() ==='rock' || playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() ==='scissors' || playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() ==='paper'){
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    }else{
        console.log("You Tied!")
    }
}
let computerSelection = getComputerChoice();
let playerSelection = 'rock'
console.log(playRound(playerSelection,computerSelection))


