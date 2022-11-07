'use strict';
let btns = document.querySelectorAll('.btn-box button');
let container = document.querySelector('.slider-container');

btns.forEach((btn, idx) => {
 btn.addEventListener('click', () => {
  let curX = container.style.transform;
  let x = curX.replace(/[^0-9]/g, '');

  //  이전 버튼 누를 시
  if (idx == 3) {
   x = x / 100 - 1;
   if (x < 0) {
    x = 2;
    container.style.transform = 'translateX(-' + (0 + 100 * x) + 'vw)';
   } else {
    container.style.transform = 'translateX(-' + (0 + 100 * x) + 'vw)';
   }
  }
  // 다음 버튼 누를 시
  if (idx == 4) {
   x = x / 100 + 1;
   console.log(x);
   if (x > 2) {
    x = 0;
    container.style.transform = 'translateX(-' + (0 + 100 * x) + 'vw)';
   } else {
    container.style.transform = 'translateX(-' + (0 + 100 * x) + 'vw)';
   }
  }
  // 숫자 버튼 누를 시
  if (idx < 3) {
   container.style.transform = 'translateX(-' + (0 + 100 * idx) + 'vw)';
  }
 });
});

//jQuery 사용시
// $('.btn-box button').each(function (idx) {
//  $(this).on('click', function () {
//   $('.slider-container').css('transform', 'translateX(-' + idx * 100 + 'vw');
//  });
// });
