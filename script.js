let computerSelection;
let playerSelection;

  function game() {
    const options = [ "rock" , "paper" , "scissors" ];
    computerSelection = options[Math.floor(Math.random() * options.length )]
    playerSelection = prompt("Rock, Paper or Scissors?",'');
      if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
      alert("you win");
      } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
      alert("you lose");
      } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
      alert("draw")
      } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
      alert("you lose");
      } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
      alert("draw");
      } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
      alert("you win");
      } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
      alert("draw");
      } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
      alert("you win");
      } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
      alert("you lose");
      } else {
      alert("You entered an incorrect answer!");
      }
  }
  
    game();
    game();
    game();
    game();
    game();

    document.writeln("Computer chose: " + computerSelection + "   ||||   ");
    document.writeln("Player chose: " + playerSelection);
  
  
