// 'use strict';
// let tabBtn = document.querySelectorAll('.tab-btn');
// let tabContent = document.querySelectorAll('.tab-content');

// tabBtn.forEach((el, idx) => {
//  el.addEventListener('click', () => {
//   removeTabClass(el);
//   addTabClass(el, idx);
//  });
// });

// function removeTabClass(el) {
//  tabBtn.forEach((el) => {
//   el.classList.remove('on');
//  });
//  tabContent.forEach((el) => {
//   el.classList.remove('show');
//  });
// }

// function addTabClass(el, idx) {
//  el.classList.add('on');
//  tabContent[idx].classList.add('show');
// }

// jQuery라면
let $tabBtn = $('.tab-btn');
let $tabList = $('.tab-list');
let $tabContent = $('.tab-content');

// for (let i = 0; i < $tabBtn.length; i++) {
//  $tabBtn.eq(i).on('click', function () {
//   tabShow(i);
//  });
// }

$tabList.click(function (e) {
 let i = Number(e.target.dataset.id);
 tabShow(i);
});

function tabShow(i) {
 $tabBtn.removeClass('on');
 $tabBtn.eq(i).addClass('on');
 $tabContent.removeClass('show');
 $tabContent.eq(i).addClass('show');
}
