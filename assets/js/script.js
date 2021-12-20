var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

function rockPaperScissors(humanPick) {
  
  var gameOutcome = humanPick + computerPick(3);
  var humanWins = ["RS", "PR", "SP"];
  var computerWins = ["RP", "PS", "SR"]; 
  //var humanTally = 0;
  //var machineTally = 0;

  // These two variables are checking if the possible outcomes are in either the 
  // humanWins array or the computerWins array by using indexOf
  var didHumanWin = humanWins.indexOf(gameOutcome) > -1;
  var didComputerWin = computerWins.indexOf(gameOutcome) > -1;

  displayOutcome(gameOutcome, didHumanWin, didComputerWin);

  console.log("Who wins? -- " + didHumanWin);
}

// Helper Function
function computerPick(num) {
  var play = "X";
  var getNumber = Math.floor(Math.random() * num);

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


function displayOutcome (outcome, humanWin, computerWin) {
  
  if (humanWin) {
    document.getElementById("humanGifWin").style.display = "flex";
    document.getElementById("humanGifWin").style.zIndex  = "1";
    document.getElementById("machineGifLose").style.display = "flex";
    document.getElementById("machineGifLose").style.zIndex  = "1";
  } else if (computerWin) {
    document.getElementById("humanGifLose").style.display = "flex";
    document.getElementById("humanGifLose").style.zIndex  = "1";
    document.getElementById("machineGifWin").style.display = "flex";
    document.getElementById("machineGifWin").style.zIndex  = "1";
  } else {
    document.getElementById("humanGifTie").style.display = "flex";
    document.getElementById("humanGifTie").style.zIndex = "1";
    document.getElementById("machineGifTie").style.display = "flex";
    document.getElementById("machineGifTie").style.zIndex  = "1";
  }
}


rock.addEventListener("click", rockPaperScissors);
paper.addEventListener("click", rockPaperScissors);
scissors.addEventListener("click", rockPaperScissors);






