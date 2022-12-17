'use strict';

const navList = document.querySelectorAll('.navigation .list');
const navIndicator = document.querySelector('.indicator');

navList.forEach((list) => {
 list.addEventListener('click', (e) => {
  e.preventDefault();
  navList.forEach((list) => list.classList.remove('active'));
  navIndicator.style.left = list.offsetLeft + 'px';
  list.classList.add('active');
 });
});
