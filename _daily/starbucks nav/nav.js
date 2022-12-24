'use strict';

const mainMenu = document.querySelectorAll('.main-menu>li');
const header = document.querySelector('body>header');

mainMenu.forEach((item) => {
 item.addEventListener('mouseover', (e) => {
  let subMenuHeight = e.currentTarget.querySelector('.submenu').offsetHeight;
  console.log(subMenuHeight);
  e.currentTarget.classList.add('active');
  header.style.height = `${subMenuHeight + 84.391}px`;
 });
 item.addEventListener('mouseout', () => {
  mainMenu.forEach((item) => item.classList.remove('active'));
  header.style.height = `84.391px`;
 });
});
