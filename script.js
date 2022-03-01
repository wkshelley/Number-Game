"use strict";

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🥳';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    // if (Boolean(guess) === false) {

    document.querySelector(".message").textContent = "No Number Entered ⛔️";
  } else if (guess === secretNumber) {
    //correct number
    document.querySelector(".message").textContent =
      "You Guess the Correct Number 🥳";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#388d1e";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // score to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "📈 To High! Guess Again";
      // same as code line below score = score - 1;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💣 You lost the game! ";
      document.querySelector(".score").textContent = 0;
    }
    //score to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 To Low! Guess Again";
      score--;
      document.querySelector(".score").textContent = score;
      //player loses game
    } else {
      document.querySelector(".message").textContent = "💣 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
/*document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
localStorage.setItem('highscore', highscore);
document.querySelector('.highscore').textContent =
  localStorage.getItem('highscore');*/
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
