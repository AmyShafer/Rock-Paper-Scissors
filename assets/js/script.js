var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

function rockPaperScissors(humanPick) {
  var computerPick = computerPlay(3);
  var gameOutcome = humanPick + computerPick;
  var humanWins = ["RS", "PR", "SP"];
  var computerWins = ["RP", "PS", "SR"]; 
  var tie = ["RR", "PP", "SS"];
  //var humanTally = 0;
  //var machineTally = 0;

  // These two variables are checking if the possible outcomes are in either the 
  // humanWins array or the computerWins array by using indexOf
  var didHumanWin = humanWins.includes(gameOutcome);
  var didComputerWin = computerWins.includes(gameOutcome);
  var didPlayersTie = tie.includes(gameOutcome);

  return displayOutcome(didHumanWin, didComputerWin, didPlayersTie);
}

// Helper Function
function computerPlay(num) {
  var play = "X";
  var getNumber = Math.floor(Math.random() * num);

    if (getNumber === 0) {
      play = "R";
    } else if (getNumber === 1) {
      play = "P";
    } else if (getNumber === 2) {
      play = "S";
    }

  return play;
}


function displayOutcome (humanWin, computerWin, tie) {
  if (humanWin) {
    document.getElementById("humanGif").src = "https://giphy.com/embed/e73hFfx1LbEtTDSWby";
    document.getElementById("machineGif").src = "https://giphy.com/embed/7M3xyRsJMivb3MV5XP";
  } else if (computerWin) {
    document.getElementById("humanGif").src = "https://giphy.com/embed/Dg0T9uVL6MdE8WOAlp";
    document.getElementById("machineGif").src = "https://giphy.com/embed/4wH0u6xNwPOUXJ9vZW";
  } else if (tie) {
    document.getElementById("humanGif").src = "https://giphy.com/embed/QNR8s1hOiSywHg2Em9";
    document.getElementById("machineGif").src = "https://giphy.com/embed/bGOgSfQclSopZIxTKJ";
  } 
}


rock.addEventListener("click", rockPaperScissors);
paper.addEventListener("click", rockPaperScissors);
scissors.addEventListener("click", rockPaperScissors);






