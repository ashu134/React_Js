'use strict';

let model = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnopen = document.querySelectorAll('.show-modal');
let btnclose = document.querySelector('.close-modal');
console.log(btnopen);
for (let i = 0; i < btnopen.length; i++) {
  btnopen[i].addEventListener('click', function () {
    console.log('eventlistner called ');
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnclose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape') {
    if (!model.classList.contains('hidden')) {
      closeModal();
    }
  }
});
