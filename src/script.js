"use strict";

// Selecting Elements
const player0el = document.querySelector(".player-0");
const player1el = document.querySelector(".player-1");
const score0 = document.querySelector("#score0");
const score1 = document.querySelector("#score1");
const curScore0 = document.querySelector("#cur-score0");
const curScore1 = document.querySelector("#cur-score1");

const diceEl = document.querySelector("#dice");

const newG = document.querySelector("#btn-new");
const roll = document.querySelector("#btn-roll");
const hold = document.querySelector("#btn-hold");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Functions
function newGame() {
  alert("New Game");
}

function rollDice() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEl.classList.remove("hidden");
  diceEl.src = `img/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`cur-score${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`cur-score${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0el.classList.toggle("player-active");
    player1el.classList.toggle("player-active");
  }
}

function holdBtn() {
  alert("Hold");
}

//Starting Conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add("hidden");

//Event Listeners
roll.addEventListener("click", rollDice);
newG.addEventListener("click", newGame);
hold.addEventListener("click", holdBtn);
