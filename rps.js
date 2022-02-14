// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     console.log(button.id);
//     game(button.id);
//   });
// });

// buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll("button");

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//   // and for each one we add a 'click' listener
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });

function computerPlay() {
  const opts = ["rock", "paper", "scissors"];
  let ind;
  let rand = Math.floor(Math.random() * 100);
  if (rand > 0 && rand < 33.3) {
    ind = 0;
  } else if (rand > 33.3 && rand < 67.66) {
    ind = 1;
  } else if (rand > 67.66 && rand < 101) {
    ind = 2;
  }
  return opts[ind];
}

function userMove() {
  const message = "Enter rock, paper, scissors";
  let input = window.prompt(message);
  let lowerInput = input.toLowerCase();
  return lowerInput;
}

function playRound(comp, user) {
  if (comp === user) {
    console.log("Its a tie");
    return "tie";
  }

  if (comp === "rock" && user === "paper") {
    console.log("User wins, paper beats rock");
    return "user";
  }
  if (comp === "rock" && user === "scissiors") {
    console.log("You lose, rock beats scissors");
    return "comp";
  }

  if (comp === "paper" && user === "scissors") {
    console.log("User wins, scissors beats paper");
    return "user";
  }
  if (comp === "paper" && user === "rock") {
    console.log("You lose, paper beats rock");
    return "comp";
  }
  if (comp === "scissors" && user === "rock") {
    console.log("You win, rock beats scissors");
    return "user";
  }
  if (comp === "scissors" && user === "paper") {
    console.log("You lose, scissor beats paper");
    return "comp";
  }
}

let userScore = 0;
let compScore = 0;
let gameCount = 0;
const container = document.querySelector("#score");
function game(choice) {
  const computerSelection = computerPlay();
  const userSelection = choice;
  document.getElementById("userSelection").innerHTML = userSelection;
  document.getElementById("computerSelection").innerHTML = computerSelection;
  let result = playRound(computerSelection, userSelection);
  if (result === "user") {
    userScore++;
    gameCount++;
  } else if (result === "comp") {
    compScore++;
    gameCount++;
  }
  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("computerScore").innerHTML = compScore;
  console.log("The score is: ");
  console.log("User: ", userScore);
  console.log("Computer: ", compScore);
  if (userScore === 5) {
    alert("You have won with a score of " + userScore + " to " + compScore);
    userScore = 0;
    compScore = 0;
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("computerScore").innerHTML = compScore;
  }
  if (compScore === 5) {
    alert("You have lost with a score of " + userScore + " to " + compScore);
    userScore = 0;
    compScore = 0;
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("computerScore").innerHTML = compScore;
  }
}
