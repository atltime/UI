'use strict';

/* GNB 메뉴 토글 이벤트 */
const $gnbBtn = document.querySelector('.gnb-btn');
const $gnbList = document.querySelector('.gnb-list');

$gnbBtn.addEventListener('click', () => {
 let el = $gnbList.classList[1];
 $gnbBtn.classList.toggle('on');
 switch (el) {
  case 'null':
   $gnbList.classList.remove('null');
   $gnbList.classList.add('on');
   break;
  case 'off':
   $gnbList.classList.remove('off');
   $gnbList.classList.add('on');
   break;
  case 'on':
   $gnbList.classList.remove('on');
   $gnbList.classList.add('off');
 }
});
