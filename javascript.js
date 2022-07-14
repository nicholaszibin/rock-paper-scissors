function computerPlay() {
    let randomNum = Math.round(Math.random() * 3);
    
    let res = "";

    if (randomNum == 0) {
        res = "Rock";
    } else if (randomNum == 1) {
        res = "Paper";
    } else {
        res = "Scissors";
    }

    return res;
}

function playRound(playerSelection, computerSelection) {
    let res = 0;
    
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You lose! Paper beats Rock");
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You win! Rock beats Paper");
        res = 1;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You win! Paper beats Rock");
        res = 1;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You lose! Scissors beats Paper");
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You lose! Rock beats Scissors");
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You win! Scissors beats Paper");
        res = 1;
    } else {
        console.log("Player selected: " + playerSelection + " and computer selected: " + computerSelection);
    }

    return res;

}

function game() {
    let playerSelection = "";
    let tally = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt();
        tally += playRound(playerSelection, computerPlay())
    }
    return tally;
}

//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

let result = game();
console.log(`You won ${result} games out of 5`);
