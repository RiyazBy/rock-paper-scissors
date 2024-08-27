let arr = ['Rock', 'Paper', 'Scissors'];
function randomize() { return Math.floor(Math.random()*3); };
function getComputerChoice() { return arr[randomize()]; };
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const body = document.querySelector("body");
const score = document.createElement ("p");
const winnerDeclaration = document.createElement ("p");

const computerChoiceDeclaration = document.createElement("h3");
body.appendChild(computerChoiceDeclaration);

const resetButton = document.createElement("button");
resetButton.classList.add("reset");
resetButton.textContent = "Play again";


function playRound(playerOneSelection, playerTwoSelection) {
    if (playerOneSelection === playerTwoSelection.toLowerCase()) { 
        winnerDeclaration.textContent="Well! It's a draw!";
    } else if ((playerOneSelection === 'rock' && playerTwoSelection.toLowerCase() === 'scissors') ||
        (playerOneSelection === 'scissors' && playerTwoSelection.toLowerCase() === 'paper') ||
        (playerOneSelection === 'paper' && playerTwoSelection.toLowerCase() === 'rock')) { 
        humanScore++;
        winnerDeclaration.textContent=`Congrats! ${playerOneSelection} beats ${playerTwoSelection.toLowerCase()}. You won this round!`;        
    } else { 
        computerScore++;
        winnerDeclaration.textContent=`Ugh! ${playerTwoSelection.toLowerCase()} beats ${playerOneSelection}. You lost this round...`;
    }
    score.textContent = `Player - ${humanScore} | ${computerScore} - Computer`;
    body.appendChild(winnerDeclaration);
    body.appendChild(score); 

    if (humanScore === 5) {
        winnerDeclaration.textContent = "Well done! You Won the game!"
        body.appendChild(winnerDeclaration);
        rock.removeEventListener("click", rockClickHandler)
        paper.removeEventListener("click", paperClickHandler);
        scissors.removeEventListener("click", scissorsClickHandler);
        scissors.style.cssText = "background-color: default; color: default;";
        paper.style.cssText = "background-color: default; color: default;";
        rock.style.cssText = "background-color: default; color: default;";
        body.appendChild(resetButton);
    }
    else if (computerScore === 5) {
        winnerDeclaration.textContent = "Game Over!"
        body.appendChild(winnerDeclaration);
        rock.removeEventListener("click", rockClickHandler);
        paper.removeEventListener("click", paperClickHandler);
        scissors.removeEventListener("click", scissorsClickHandler);
        scissors.style.cssText = "background-color: default; color: default;";
        paper.style.cssText = "background-color: default; color: default;";
        rock.style.cssText = "background-color: default; color: default;";
        body.appendChild(resetButton);
    }
}


function rockClickHandler() {
    const playerChoice = "rock";
    rock.style.cssText = "background-color: black; color: white;";
    scissors.style.cssText = "background-color: default; color: default;";
    paper.style.cssText = "background-color: default; color: default;";
    const computerChoice = getComputerChoice();
    computerChoiceDeclaration.textContent = `Computer chose: ${computerChoice}`
    playRound(playerChoice, computerChoice);
}
function paperClickHandler() {
    const playerChoice = "paper";
    paper.style.cssText = "background-color: black; color: white;";
    rock.style.cssText = "background-color: default; color: default;";
    scissors.style.cssText = "background-color: default; color: default;";
    const computerChoice = getComputerChoice();
    computerChoiceDeclaration.classList.add("computerChoice");
    computerChoiceDeclaration.textContent = `Computer chose: ${computerChoice}`
    playRound(playerChoice, computerChoice);
}
function scissorsClickHandler() {
    const playerChoice = "scissors";
    scissors.style.cssText = "background-color: black; color: white;";
    rock.style.cssText = "background-color: default; color: default;";
    paper.style.cssText = "background-color: default; color: default;";
    const computerChoice = getComputerChoice();
    computerChoiceDeclaration.classList.add("computerChoice");
    computerChoiceDeclaration.textContent = `Computer chose: ${computerChoice}`
    playRound(playerChoice, computerChoice);
}
rock.addEventListener("click", rockClickHandler);
paper.addEventListener("click", paperClickHandler);
scissors.addEventListener("click", scissorsClickHandler)

resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    computerChoiceDeclaration.remove();
    winnerDeclaration.remove();
    score.remove();
    resetButton.remove();
    rock.addEventListener("click", rockClickHandler);
    paper.addEventListener("click", paperClickHandler);
    scissors.addEventListener("click", scissorsClickHandler)}
)