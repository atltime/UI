'use strict';

/* GNB 메뉴 토글 이벤트 */
const $gnbBtn = document.querySelector('.gnb-btn');
const $gnbList = document.querySelector('.gnb-list');

const gnbEffectInit = () => ($gnbList.classList.value = 'gnb-list');

const gnbEffectOn = () => {
 gnbEffectInit();
 $gnbBtn.classList.add('on');
 $gnbList.classList.add('on');
};
const gnbEffectOff = () => {
 gnbEffectInit();
 $gnbBtn.classList.remove('on');
 $gnbList.classList.add('off');
};

const gnbStatusMap = {
 null: gnbEffectOn,
 on: gnbEffectOff,
 off: gnbEffectOn,
};

$gnbBtn.addEventListener('click', () => {
 let el = $gnbList.classList[1];
 return gnbStatusMap[el]();
});
