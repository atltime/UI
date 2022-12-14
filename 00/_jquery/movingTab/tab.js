'use strict';

// jQuery로 구현
// $(function () {
//  const initWidth = $('.tabmenu li').eq(0).width();
//  const initHeight = $('.tabmenu li').eq(0).height();
//  $('.highlight').css({ width: initWidth + 'px', height: initHeight + 'px' });

//  function moveHighlight(idx) {
//   console.log(idx);
//   const newLeft = $('.tabmenu li').eq(idx).position().left;
//   const newWidth = $('.tabmenu li').eq(idx).width();
//   $('.highlight').css({ width: newWidth + 'px', left: newLeft + 'px' });
//  }

//  function showContent(idx) {
//   $('.tab').removeClass('active');
//   $('.tab').eq(idx).addClass('active');
//  }

//  $('.tabmenu li').on('click', function (e) {
//   e.preventDefault();
//   $('.tabmenu li').removeClass('active');
//   $(this).addClass('active');
//   const idx = $(this).index();
//   moveHighlight(idx);
//   showContent(idx);
//  });
// });

const tabMenu = document.querySelectorAll('.tabmenu li');
const tabs = document.querySelectorAll('.tab');
const highlight = document.querySelector('.highlight');
const highlightInit = (() => {
 highlight.style.width = tabMenu[0].offsetWidth + 'px';
 highlight.style.height = tabMenu[0].offsetHeight + 'px';
})();

function showContent(idx) {
 tabs.forEach((item) => item.classList.remove('active'));
 tabs[idx].classList.add('active');
}

function moveHighlight(idx) {
 const newLeft = tabMenu[idx].offsetLeft;
 const newWidth = tabMenu[idx].offsetWidth;
 highlight.style.left = newLeft + 'px';
 highlight.style.width = newWidth + 'px';
}

tabMenu.forEach((item, idx) => {
 item.addEventListener('click', function (e) {
  e.preventDefault();
  showContent(idx);
  moveHighlight(idx);
 });
});
