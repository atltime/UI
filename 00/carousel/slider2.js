'use strict';
let container = document.querySelector('.slider-container');
let btns = document.querySelectorAll('.btn-list li');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let total = btns.length - 1;

btns.forEach((btn, idx) => {
 btn.addEventListener('click', () => {
  btnInit();
  btn.classList.add('on');
  container.style.transform = 'translateX(-' + 100 * idx + 'vw)';
 });
});

prev.addEventListener('click', () => {
 let curX = container.style.transform;
 let x = curX.replace(/[^0-9]/g, '') / 100;
 x = x - 1;
 btnInit();
 if (x < 0) {
  x = total;
  btns[x].classList.add('on');
  container.style.transform = 'translateX(-' + 100 * x + 'vw)';
 } else {
  btns[x].classList.add('on');
  container.style.transform = 'translateX(-' + 100 * x + 'vw)';
 }
});

next.addEventListener('click', () => {
 let curX = container.style.transform;
 let x = curX.replace(/[^0-9]/g, '') / 100;
 x = x + 1;
 btnInit();
 if (x > total) {
  x = 0;
  btns[x].classList.add('on');
  container.style.transform = 'translateX(-' + 100 * x + 'vw)';
 } else {
  btns[x].classList.add('on');
  container.style.transform = 'translateX(-' + 100 * x + 'vw)';
 }
});

function btnInit() {
 btns.forEach((btn) => {
  btn.classList.remove('on');
 });
}
