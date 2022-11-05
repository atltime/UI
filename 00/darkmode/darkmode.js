'use strict';

const modeChgBtn = document.querySelector('#modeBadgeBtn');
const body = document.querySelector('body');
let count = 0;

modeChgBtn.addEventListener('click', () => {
 count++;
 //  console.log(count);

 if (count % 2 == 0) {
  modeChgBtn.classList.remove('text-bg-light');
  modeChgBtn.classList.add('text-bg-secondary');
  modeChgBtn.innerHTML = 'Dark';
  body.classList.remove('dark');
 } else {
  modeChgBtn.classList.remove('text-bg-secondary');
  modeChgBtn.classList.add('text-bg-light');
  modeChgBtn.innerHTML = 'Light';
  body.classList.add('dark');
 }
});
