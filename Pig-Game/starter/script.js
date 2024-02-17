'use strict';

//Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0E1 = document.querySelector('current--0');
const current0E2 = document.querySelector('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');
const newGame = document.querySelector('.btn--new');
let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let flag = true;
//Starting Conditions
const starter = function () {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  diceEl.classList.add('hidden');
  player0E1.classList.remove('player--winner');
  player1E1.classList.remove('player--winner');
  player0E1.classList.add('player--active');
  player1E1.classList.remove('player--active');
  flag = true;
};
starter();

const playerchange = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0E1.classList.toggle('player--active');
  player1E1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (flag === true) {
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomNum}.png`;
    console.log(randomNum);

    if (randomNum != 1) {
      //Add dice to current Score
      currentScore = currentScore + randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //current0E1.textContent = currentScore;
    } else {
      playerchange();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (flag == true) {
    console.log('on hold');
    //Add current score to active players score
    score[activePlayer] += currentScore;
    //score[1]= score[1]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //finish the game
    if (score[activePlayer] >= 20) {
      console.log(document.querySelector(`.player--${activePlayer}`));
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      flag = false;
    } else {
      playerchange();
    }
  }
});

newGame.addEventListener('click', function () {
  //flag = true;
  starter();
});
const newg = function () {};
console.log(newGame);
