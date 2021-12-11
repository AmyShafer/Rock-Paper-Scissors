
function rockPaperScissors() {
  window.alert("Welcome to Rock, Paper, Scissors!");

  var humanPick = window.prompt("Pick R, P, or S!", "");
  var computerPick = computerPlay(2);
  var gameOutcome = humanPick + computerPick;
  var humanWins = ["RS", "PR", "SP"];
  var computerWins = ["RP", "PS", "SR"]; 

  // These two variables are checking if the possible outcomes are in either the 
  // humanWins array or the computerWins array by using indexOf
  var didHumanWin = humanWins.indexOf(gameOutcome) > -1;
  var didComputerWin = computerWins.indexOf(gameOutcome) > -1;

  var winTotals = {
    humanWinCount: 0,
    computerWinComputer: 0
  }

  if (humanPick === computerPick) {
  message = " ~~~~~ It's a Tie! ~~~~~ ";
  } else if (didHumanWin) {
    message = " ~~~~~ THE HUMAN WINS! ~~~~~ ";
    winTotals.humanWinCount++;
  } else if (didComputerWin) {
    message = " ~~~~~ THE MACHINE WINS! ~~~~~ ";
    winTotals.computerWinCount++;
  } else {
    message = " --x-- Invalid Pick --x--";
  }

  // The pop-up tells you the outcome of the game you played
  window.confirm(message);

  return winTotals;
}

// Helper Function
function computerPlay(num) {
  var play = "X";
  var getNumber = Math.ceil(Math.random() * num);

    if (getNumber === 0) {
      play = "R";
    } else if (getNumber === 1) {
      play = "P";
    } else if (getNumber === 2) {
      play = "S";
    }

  console.log("(The Computer played: " + play + ")");  

  return play;
}

var result1 = rockPaperScissors();
console.log(result1);






