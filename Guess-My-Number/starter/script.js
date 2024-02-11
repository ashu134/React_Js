'use strict';

console.log(document.querySelector('.message').textContent);

let randomNum = Math.trunc(Math.random() * 20);
//document.querySelector('.number').textContent = randomNum;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let input = document.querySelector('.guess').value;
  const intInput = Number.parseInt(input);
  console.log(intInput + '  ' + typeof intInput);
  console.log(randomNum);
  if (!intInput) {
    document.querySelector('.message').textContent = 'Info: No Number';
  } else if (input == randomNum) {
    document.querySelector('.message').textContent = '❤ Great! Correct Number';
    // document.querySelector('.highscore').textContent = score;

    //let body = document.getElementsByTagName('body');
    //body.style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'green';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (input != randomNum) {
    if (score >= 0) {
      document.querySelector('.message').textContent =
        input > randomNum ? '🤷‍♀️ Guess is too High' : '🤷‍♂️ Guess is Too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You Lost the game ';
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (input > randomNum) {
  //   if (score >= 0) {
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '🤷‍♀️ Guess is too High';
  //   } else {
  //     document.querySelector('.message').textContent = '😢 You Lost the game ';
  //   }
  // } else {
  //   if (score >= 0) {
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '🤷‍♂️ Guess is Too Low';
  //   } else {
  //     document.querySelector('.message').textContent = '😢 You Lost the game ';
  //   }
  // }
  //document.querySelector('.highscore').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // let intInput = Math.trunc(Math.random() * 20);
  randomNum = Math.trunc(Math.random() * 20);
  console.log('again ' + randomNum);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
});

// document.querySelector('.again').addEventListener('click', function () {
//   console.log('clicked');
// });
