function computerPlay() {
  const opts = ["rock", "paper", "scissors"];
  let ind;
  ind = Math.floor(Math.random() * 3);
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

function game() {
  let userScore = 0;
  let compScore = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const userSelection = userMove();
    let result = playRound(computerSelection, userSelection);
    if (result === "user") {
      userScore++;
    } else if (result === "comp") {
      compScore++;
    }
    console.log("The score is: ");
    console.log("User: ", userScore);
    console.log("Computer: ", compScore);
  }
}

game();
