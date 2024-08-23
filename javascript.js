let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
//Function to play a five-round game
function playGame() {
    for (i=1; i<=5; i++) {
        let arr = ['rock', 'paper', 'scissors'];
        //Function to get the player's choice
        do { humanChoice = prompt("Rock! Paper! Scissors!", "");
            if (humanChoice === null) {
                alert("Game Canceled.");
                return;}
        } while (humanChoice.toLowerCase() != 'rock' && humanChoice.toLowerCase() != 'paper' && humanChoice.toLowerCase() != 'scissors');
        function getHumanChoice() {return humanChoice.toLowerCase()};			  
        alert(`You chose ${getHumanChoice()}`);
        //Function to get the computer's random choice
        function randomize() { return Math.floor(Math.random()*3); };
        function getComputerChoice() { return arr[randomize()]; };
        //Function to play a single round and tell the player whether they won or lost the round
        function playRound(playerOneSelection, playerTwoSelection) {
            if (playerOneSelection === playerTwoSelection) { alert ("Well! It's a draw!") }
            else if ((playerOneSelection === 'rock' && playerTwoSelection === 'scissors') ||
                (playerOneSelection === 'scissors' && playerTwoSelection === 'paper') ||
                (playerOneSelection === 'paper' && playerTwoSelection === 'rock')) 
                { humanScore++;
                alert(`Congrats! ${playerOneSelection} beats ${playerTwoSelection}. You won round ${i}!`);}
            else { computerScore++;
                alert(`Ugh! ${playerTwoSelection} beats ${playerOneSelection}. You lost round ${i}...`);}
        }
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        alert(`the computer chose ${computerChoice}`);
        playRound(humanChoice, computerChoice);
        alert(`The score is : Player - ${humanScore} | ${computerScore} - Computer`);
    }
    //Declare the final result and tell the player whether they won or lost the game 
    alert(`The final score is Player - ${humanScore} | ${computerScore} - Computer`);
    if (humanScore === computerScore) {alert("That's a draw.")}
    else if (humanScore > computerScore) {alert("Hurray! You won the game!")}
    else {alert("Game over. You lost the game, better luck next time...")}
    alert("To play again, press F5.")
}
playGame();
