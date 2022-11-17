// if문으로 교체
'use strict';

/* GNB 메뉴 토글 이벤트 */
const $gnbBtn = document.querySelector('.gnb-btn');
const $gnbList = document.querySelector('.gnb-list');

$gnbBtn.addEventListener('click', () => {
 if ($gnbBtn.classList.contains('on') === true) {
  $gnbBtn.classList.remove('on');
  $gnbList.classList.remove('on');
  $gnbList.classList.add('off');
 } else {
  $gnbList.classList.remove('null', 'off');
  $gnbBtn.classList.add('on');
  $gnbList.classList.add('on');
 }
});
