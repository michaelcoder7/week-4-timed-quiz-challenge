// Layout of Important Variables for the game to run

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

// function for the game to start

function onStartGame() {
  // timer set at 75 seconds

  secondsLeft = 75;

  currentQuestion = 0;

  score = 0;

  countdownTimer = setInterval(function () {
    if (secondsLeft > 0) {
      timer.textContent = secondsLeft;
    } else {
      // stops the timer and ends game
      stopGame();
    }

    secondsLeft--;
  }, 1000);

  // to hide the welcome section
  welcome.style.display = "none";
  result.style.display = "none";
  quiz.style.display = "flex";

  // to display first question
  displayQuestion();
}

//function for displaying question

function displayQuestion() {
  // Increment to get next question
  currentQuestion++;

  console.log("current question is " + currentQuestion);

  // If the questions have run out

  if (currentQuestion >= questions.length) {
    stopGame();
    return;
  }

  let question = questions[currentQuestion];
  document.getElementById("question").textContent = question.title;

  options.innerHTML = "";

  // to load the choices and output the new possible options

  for (let i = 0; i < question.choices.length; i++) {
    let option = document.createElement("div");
    option.textContent = question.choices[i];
    option.onclick = onSelectAnswer;
    option.classList.add("option");

    options.appendChild(option);
  }
}

// function for answer selection

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

  // calls up the next question
  displayQuestion();
}

// function to stop game

function stopGame() {
  clearInterval(countdownTimer);

  timer.textontent = "";

  quiz.style.display = "none";
  result.style.display = "flex";

  summary.textContent = "Your Score is: " + score;
}

// function to save scores and initials

function onSaveScore(e) {
  let initials = document.getElementById("initials").value;

  if (initials !== "") {
    localStorage.setItem(initials, score);

    document.getElementById("initials").value = "";
  }
}
// function to view scores
function onViewScores(e) {
  window.localStorage.href = "scores.html";
}

// function for displaying message regarding scores
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
