let startQuiz = document.getElementById("startQuiz");
let saveScore = document.getElementById("saveScore");
let viewScores = document.getElementById("viewScores");
let playAgain = document.getElementById("playAgain");

let welcome = document.getElementById("welcome");
let quiz = document.getElementById("quiz");
let result = document.getElementById("result");

let options = document.getElementById("options");
let message = document.getElementById("message");

let timer = document.getElementById("timer");

let summary = document.getElementById("summary");

let secondsLeft = 0;
let score = 0;
let currentQuestion = 0;
let countdownTimer;

function stopGame() {
  clearInterval(countdownTimer);

  timer.textontent = "";

  quiz.style.display = "none";
  result.style.display = "flex";

  summary.textContent = "Your Score is: " + score;
}

function onSaveScore(e) {
  let initials = document.getElementById("initials").value;
}
