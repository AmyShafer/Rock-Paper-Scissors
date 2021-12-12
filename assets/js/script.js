
function rockPaperScissors(humanPick) {
  
  var gameOutcome = humanPick + computerPick;
  var humanWins = ["RS", "PR", "SP"];
  var computerWins = ["RP", "PS", "SR"]; 
  var humanTally = 0;
  var machineTally = 0;

  // These two variables are checking if the possible outcomes are in either the 
  // humanWins array or the computerWins array by using indexOf
  var didHumanWin = humanWins.indexOf(gameOutcome) > -1;
  var didComputerWin = computerWins.indexOf(gameOutcome) > -1;

  if (humanPick === computerPick) {
    // changeHumanGif
    // changeMachineGif
    // no change to score
  } else if (didHumanWin) {
    // changeHumanGif
    // changeMachineGif
    // add one to human score
  } else if (didComputerWin) {
    // changeHumanGif
    // changeMachineGif
    // add one to machine score
  } else {
    // changeHumanGif
    // changeMachineGif
    // no change to score
  }

  return displayScoreboardUpdate(humanTally, machineTally);
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

  console.log("(The Computer played: " + play + ")");  

  return play;
}

function displayScoreboardUpdate (addHuman, addMachine) {
  
}

function displayMessage (outcome) {
  if (humanPick === computerPick) {
    document.getElementsByTagName("humanGifTie").style.display = flex;
    document.getElementsByTagName("MachineGifTie").style.display = flex;
  } else if (didHumanWin) {
    document.getElementsByTagName("humanGifWin").style.display = flex;
    document.getElementsByTagName("MachineGifLose").style.display = flex;
  } else if (didComputerWin) {
    document.getElementsByTagName("humanGifLose").style.display = flex;
    document.getElementsByTagName("MachineGifWin").style.display = flex;
  } else {
    document.getElementsByTagName("humanGifInvalid").style.display = flex;
    document.getElementsByTagName("MachineGifInvalid").style.display = flex;
  }
}

rockPaperScissors();






