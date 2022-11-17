'use strict';

/* GNB 메뉴 토글 이벤트 */
const $gnbBtn = document.querySelector('.gnb-btn');
const $gnbList = document.querySelector('.gnb-list');

const gnbEffectOn = () => ($gnbList.classList.value = 'gnb-list on');

const gnbEffectOff = () => ($gnbList.classList.value = 'gnb-list off');

const gnbStatusMap = {
 null: gnbEffectOn,
 on: gnbEffectOff,
 off: gnbEffectOn,
};

$gnbBtn.addEventListener('click', () => {
 $gnbBtn.classList.toggle('on');
 let el = $gnbList.classList[1];
 return gnbStatusMap[el]();
});
