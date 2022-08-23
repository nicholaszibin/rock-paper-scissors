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
};

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You win! Rock beats Paper");
        playerScore += 1;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You win! Paper beats Rock");
        playerScore += 1;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You win! Scissors beats Paper");
        playerScore += 1;
    } else {
        console.log("Player selected: " + playerSelection + " and computer selected: " + computerSelection);
    }

    let playerImage = document.querySelector(".player > img");
    playerImage.src = "images/"+playerSelection.toLowerCase()+".svg";

    let computerImage = document.querySelector(".computer > img");
    computerImage.src = "images/"+computerSelection.toLowerCase()+".svg";
    
    if (playerScore === 5) {
    alert("You win!");
    playerScore = 0;
    computerScore = 0;
    }

    if (computerScore === 5) {
        alert("Computer wins. Try again.");
        playerScore = 0;
        computerScore = 0;
    }

    let playerScoreObj = document.querySelector(".player > .score");
    playerScoreObj.textContent = `${playerScore}`;

    let computerScoreObj = document.querySelector(".computer > .score");
    computerScoreObj.textContent = `${computerScore}`;

};

let playerScore = 0;
let computerScore = 0;

const btnRock = document.querySelector(".rock")
btnRock.addEventListener('click', () => {
    playRound("rock", computerPlay());
});

const btnPaper = document.querySelector(".paper")
btnPaper.addEventListener('click', () => {
    playRound("paper", computerPlay());
});

const btn = document.querySelector(".scissors")
btn.addEventListener('click', () => {
    playRound("scissors", computerPlay());
});



//function game() {
//    let playerSelection = "";
//    let tally = 0;

//    for (let i = 0; i < 5; i++) {
//        playerSelection = prompt();
//        tally += playRound(playerSelection, computerPlay())
//    }
//    return tally;
//}

//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

//let result = game();
//console.log(`You won ${result} games out of 5`);



