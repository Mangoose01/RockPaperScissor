let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;



const body = document.querySelector('body');
const warriorBtn = document.querySelector('#warriorbtn');
const mageBtn = document.querySelector('#magebtn');
const rogueBtn = document.querySelector('#roguebtn');
const playerScoreDis = document.querySelector('#playerscore');
const computerScoreDis = document.querySelector('#computerscore');
const duelOutcome = document.querySelector('#outcome');
playerScoreDis.textContent = "Number of battles you've won: " +playerScore;
computerScoreDis.textContent = "Number of battles you've lost: " +computerScore;

warriorBtn.addEventListener('click', () => {
  playerSelection = "rock";
  game();
});

mageBtn.addEventListener('click', () => {
  playerSelection = "paper";
  game();
});

rogueBtn.addEventListener('click', () => {
  playerSelection = "scissors";
  game();
});

  function game() {
    const options = [ "rock" , "paper" , "scissors" ];
    computerSelection = options[Math.floor(Math.random() * options.length )];
      if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
      duelOutcome.textContent = "Your opponent is a tall Orcish rogue, notorious for having taken the lives of many in our kingdom. After a long and fierce battle, your warrior manages to injure the rogue's right knee, causing him to stumble and fall. In one fell swoop, your warrior decapitates the rogue's head and wins the duel!"
      playerScore++;
      } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        duelOutcome.textContent = "Your opponent is a high-ranking undead wizard. As the duel begins, the wizard manages to evade your warrior's axe and responds with a firebolt that melts your warrior's breastplate. Your warrior collapes and the wizard emerges victorious..."
      computerScore++;
      } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        duelOutcome.textContent = "Your opponent is another warrior. Upon closer inspection, your warrior realizes that his adversary is a former classmate from warrior University. As a result, both warriors refuse to fight one another and the duel is declared a draw!"
      } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        duelOutcome.textContent = "Your opponent is a terrifying undead rogue. Your wizard attempts to cast a fireball spell at his partially decomposed adversary, but the rogue vanishes before the destructive spell reaches him. A few seconds later, a dagger perforates through your wizard's back. As the wizard collapses, you notice the rogue standing behind, bloody dagger in hand, grinning at you. You lost the fight!"
      computerScore++;
      } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        duelOutcome.textContent = "Your opponent is a floating spell-casting demon. Your wizard immediately casts a spell to transform the enemy into a sheep and render him harmless. Alas, the demon had the very same idea and casts the same spell back simultaneously. The wizard and demon are then seen grazing on the grass together and the fight is declared a draw. As you stare down your wizard in anger, he looks back at you and mutters: 'Baaaaah...'"
      } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        duelOutcome.textContent = "Your opponent is a 15-foot tall ogre with a massive two-handed sword. As the duel begins, the ogre proceeds to laugh and ridicule your wizard for his short stature. Full of confidence, he even drops his sword and leaps at your wizard in an attempt to step on him and end the fight. Your wizard manages to shield himself by casting a barrier spell, and then uses a rare incantation to transform the ogre into a small frog. The fight finishes promptly as your wizard steps on the frog. Oh, the irony!"
      playerScore++;
      } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        duelOutcome.textContent = "Your opponent is another stealthy rogue. As the duel begins, both rogues vanish in the shadows and look for one another. Alas, they're both exceptional at comouflage and never manage to find each other. The match is declared a draw!"
      } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        duelOutcome.textContent = "Your opponent is an old wizard... very old. As he sudenly begins speaking loudly to start the incantation for what appears to be an incredibly powerful destructive spell, his bottom denture flies out of his mouth, causing him to mispronounce the spell. A second later, the wizard is engulfed in flames resulting from the failed spell. Your rogue appears to be disappointed by this outcome, but you clap in excitement because you won the match!"
      playerScore++;
      } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        duelOutcome.textContent = "Your opponent is one of the legendary deathknights. Your rogue attempts to strike him with a throwing knife, but the knife passes right through as if his adversary was made of smoke. This thing is invincible! Realizing that there's no way to win this fight with conventional weapons,your rogue escapes like a coward. You lost the fight!"
      computerScore++;
      } 

    playerScoreDis.textContent = "Number of battles you've won: " + playerScore;
    computerScoreDis.textContent = "Number of battles you've lost: " + computerScore;

    function reset() {
      playerScore = 0;
      computerScore = 0;
      playerScoreDis.textContent = "Number of battles you've won: " + playerScore;
      computerScoreDis.textContent = "Number of battles you've lost: " + computerScore;
      duelOutcome.textContent = "";
    }

    if (playerScore > 4) {
      alert("you won!");
      reset();
    } else if (computerScore >4) {
      alert("you lost!");
      reset();
    }
  
  }



  
