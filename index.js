const refs = {
  btnCheck: document.querySelector(".check"),
  btnAgain: document.querySelector(".again"),
  numberInput: document.querySelector(".number-input"),
  randonNumber: document.querySelector(".question"),
  guessMessage: document.querySelector(".guess-message"),
  score: document.querySelector(".score"),
  bodyStyle: document.querySelector("body"),
  spanHighScore: document.querySelector(".highscore"),
};

let secretNumber = Math.trunc(Math.random() * 20 + 1); // Отримуємо рандомне число від 1 до 20
let score = 20;
let highScore = 0;

refs.btnCheck.addEventListener("click", function (e) {
  e.preventDefault();
  const guessingNumber = Number(refs.numberInput.value);

  // ----- NO INPUT -----
  if (!guessingNumber) {
    refs.guessMessage.textContent = "Enter a number!";

    // ---- PLEYER WON -----
  } else if (guessingNumber === secretNumber) {
    refs.guessMessage.textContent = "Great guess!";
    refs.randonNumber.textContent = secretNumber;
    refs.bodyStyle.style.backgroundColor = "rgb(9, 250, 21)";
    refs.randonNumber.style.width = "50rem";
    if (score > highScore) {
      highScore = score;
      refs.spanHighScore.textContent = score;
    }
    // ---- TO HIGH -------
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      refs.guessMessage.textContent = "High number!";
      score--;
      refs.score.textContent = score;
    } else {
      refs.guessMessage.textContent = "Game Over!";
    }
    // ------ TO LOW -----
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      refs.guessMessage.textContent = "Small number!";
      score--;
      refs.score.textContent = score;
    } else {
      refs.guessMessage.textContent = "Game Over!";
      refs.score.textContent = 0;
    }
  }
});

// ----- BTN AGAIN -----
refs.btnAgain.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  refs.guessMessage.textContent = "Start guessing";
  refs.randonNumber.textContent = "???";
  refs.randonNumber.style.width = "25rem";
  refs.score.textContent = score;
  refs.numberInput.value = "";
  refs.bodyStyle.style.backgroundColor = "rgb(0, 0, 0)";
});
