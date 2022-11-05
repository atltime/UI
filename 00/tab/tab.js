'use strict';

let tabBtn = document.querySelectorAll('.tab-btn');
let tabContent = document.querySelectorAll('.tab-content');

tabBtn.forEach((el, idx) => {
 el.addEventListener('click', () => {
  removeTabClass();
  el.classList.add('on');
  tabContent[idx].classList.add('show');
 });
});

function removeTabClass() {
 tabBtn.forEach((el) => {
  el.classList.remove('on');
 });
 tabContent.forEach((el) => {
  el.classList.remove('show');
 });
}

// jQuery라면
// let $tabBtn = $('.tab-btn');
// let $tabContent = $('.tab-content');

// for (let i = 0; i < $tabBtn.length; i++) {
//  $tabBtn.eq(i).on('click', function () {
//   $tabBtn.removeClass('on');
//   $tabBtn.eq(i).addClass('on');
//   $tabContent.removeClass('show');
//   $tabContent.eq(i).addClass('show');
//  });
// }
