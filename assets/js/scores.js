let scoresheet = document.getElementById("scoresheet");
let backtoQuiz = document.getElementById("backtoQuiz");

function onBackToQuiz() {
  window.location.href = "index.html";
}

for (let i = 0; i < localStorage.length; i++) {
  let initials = localStorage.key(i);
  let score = localStorage.getItem(initials);

  let result = document.createElement("div");
  result.classList.add("result");

  result.innerHTML = `<div class="score-item">${initials}</div>
            <div class="score-item">${score}</div>`;

  scoresheet.appendChild(result);
}

backtoQuiz.addEventListener("click", onBackToQuiz);
