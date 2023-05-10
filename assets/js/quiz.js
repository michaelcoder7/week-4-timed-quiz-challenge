let beginQuiz = document.getElementById("startQuiz");
let savetheScore = document.getElementById("saveScore");
let viewtheScores = document.getElementById("viewScores");
let playgameAgain = document.getElementById("playAgain");

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

function onStartGame() {
  secondsLeft = 75;

  currentQuestion = 0;

  score = 0;

  countdownTimer = setInterval(function () {
    if (secondsLeft > 0) {
      timer.textContent = secondsLeft;
    } else {
      stopGame();
    }

    secondsLeft--;
  }, 1000);

  welcome.style.display = "none";
  result.style.display = "none";
  quiz.style.display = "flex";

  displayQuestion();
}

function displayQuestion() {
  currentQuestion++;

  console.log("current question is " + currentQuestion);

  if (currentQuestion >= questions.length) {
    stopGame();
    return;
  }

  let question = questions[currentQuestion];
  document.getElementById("question").textContent = question.title;

  options.innerHTML = "";

  for (let i = 0; i < question.choices.length; i++) {
    let option = document.createElement("div");
    option.textContent = question.choices[i];
    option.onclick = onSelectAnswer;
    option.classList.add("option");

    options.appendChild(option);
  }
}

function onSelectAnswer(e) {
  let correctAnswer = questions[currentQuestion].answer;
  let userAnswer = e.target.textContent;

  if (correctAnswer === userAnswer) {
    score++;

    displayMessage("Correct!");
  } else {
    score--;
    displayMessage("Wrong :-<");
  }

  displayQuestion();
}

function stopGame() {
  clearInterval(countdownTimer);

  timer.textontent = "";

  quiz.style.display = "none";
  result.style.display = "flex";

  summary.textContent = "Your Score is: " + score;
}

function onSaveScore(e) {
  let initials = document.getElementById("initials").value;

  if (initials !== "") {
    localStorage.setItem(initials, score);

    document.getElementById("initials").value = "";
  }
}

function onViewScores(e) {
  window.localStorage.href = "scores.html";
}

function displayMessage(msg) {
  message.textContent = msg;

  setTimeout(function () {
    message.textContent = " ";
  }, 1000);
}

beginQuiz.addEventListener("click", onStartGame);
savetheScore.addEventListener("click", onSaveScore);
viewtheScores.addEventListener("click", onViewScores);
playgameAgain.addEventListener("click", onStartGame);
