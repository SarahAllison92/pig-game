"use strict";

// Selecting Elements
const player0el = document.querySelector("#player-0");
const player1el = document.querySelector("#player-1");
const ply0 = document.querySelector("#player0");
const ply1 = document.querySelector("#player1");
const score0 = document.querySelector("#score0");
const score1 = document.querySelector("#score1");
const curScore0 = document.querySelector("#cur-score0");
const curScore1 = document.querySelector("#cur-score1");
const current = document.querySelectorAll("#current");

const diceEl = document.querySelector("#dice");

const newG = document.querySelector("#btn-new");
const roll = document.querySelector("#btn-roll");
const hold = document.querySelector("#btn-hold");

let scores, currentScore, activePlayer, playing;

//Functions
function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  curScore0.textContent = 0;
  curScore1.textContent = 0;
  ply0.textContent = "Player 1";
  ply1.textContent = "Player 2";

  diceEl.classList.add("hidden");
  roll.classList.remove("hidden");
  hold.classList.remove("hidden");
  current.forEach((el) => {
    el.classList.remove("hidden");
  });

  player0el.classList.remove("player-winner");
  player1el.classList.remove("player-winner");
  player0el.classList.add("player-active");
  player1el.classList.remove("player-active");
}

init();

function switchPlayer() {
  document.getElementById(`cur-score${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0el.classList.toggle("player-active");
  player1el.classList.toggle("player-active");
}

function rollDice() {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden");
    diceEl.src = `img/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`cur-score${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
}
console.log(rollDice);

function holdBtn() {
  if (playing) {
    //1 add current score to score of active player score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + current score
    document.getElementById(`score${activePlayer}`).textContent =
      scores[activePlayer];

    //2 check if score if already 100
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
      document.querySelector(
        `#player${activePlayer}`
      ).textContent = `You win!!`;
      diceEl.classList.add("hidden");
      roll.classList.add("hidden");
      hold.classList.add("hidden");
      current.forEach((el) => {
        el.classList.add("hidden");
      });
    } else {
      switchPlayer();
    }
  }
  //finish game

  //or switch to next player
}

//Event Listeners
roll.addEventListener("click", rollDice);
newG.addEventListener("click", init);
hold.addEventListener("click", holdBtn);

//MODEL FUNNCTIONALITY

const modal = document.querySelector("#modal");
const btnCloseModal = document.querySelector("#close");
const btnOpenModal = document.querySelector("#show-modal");
const overlay = document.querySelector("#overlay");
console.log(overlay);
function onClick() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function onClickClose() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnOpenModal.addEventListener("click", onClick);
btnCloseModal.addEventListener("click", onClickClose);
overlay.addEventListener("click", onClickClose);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    onClickClose();
  }
});
