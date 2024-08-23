let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
function playGame() {
    for (i=1; i<=5; i++) {
        //init an array containing the possible options
        let arr = ['rock', 'paper', 'scissors'];
        //--creating getHumanChoice function--
        //prompt the player to write their choice
        //check if humanChoice is either rock, paper or scissors (case-insensitive)
        //keep prompting while humanChoice is different than the valid options or break when the player cancels
        do { humanChoice = prompt("Rock! Paper! Scissors!", "");
            if (humanChoice === null) {
                alert("Game Canceled.");
                return;}
        } while (humanChoice.toLowerCase() != 'rock' && humanChoice.toLowerCase() != 'paper' && humanChoice.toLowerCase() != 'scissors');
        function getHumanChoice() {return humanChoice.toLowerCase()};			  
        alert(`You chose ${getHumanChoice()}`);
        //--creating getComputerChoice function--
        //get a random number in [0, 3)
        //get the array element corresponding to the random number
        function randomize() { return Math.floor(Math.random()*3); };
        function getComputerChoice() { return arr[randomize()]; };
        //--creating playRound function--
        //goal : declare the winner
        //if humanChoice = computerChoice then tell the player it's a draw 
        //else if humanChoice = rock and computerChoice = scissors tell the player they won
        //else if humanChoice = scissors and computerChoice = paper tell the player they won
        //else if humanChoice = paper and computerChoice = rock tell the player they won
        //else tell the player they lost the game
        function playRound(playerOneSelection, playerTwoSelection) {
            if (playerOneSelection === playerTwoSelection) { alert ("Well! It's a draw!") }
            else if ((playerOneSelection === 'rock' && playerTwoSelection === 'scissors') 
                || (playerOneSelection === 'scissors' && playerTwoSelection === 'paper') 
                || (playerOneSelection === 'paper' && playerTwoSelection === 'rock')) 
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
    do {alert(`The final score is Player - ${humanScore} | ${computerScore} - Computer`);
    if (humanScore === computerScore) {alert("That's a draw.")}
    else if (humanScore > computerScore) {alert("Hurray! You won the game!")}
    else {alert("Game over. You lost the game, better luck next time...")}
    alert("To play again, press F5.")}
    while (humanChoice !== null);
}
playGame();
