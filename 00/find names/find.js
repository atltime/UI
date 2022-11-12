'use strict';

const roles = ['장태상', '윤채옥', '마에다', '나월댁', '윤종원', '윤채옥'];
const actors = ['박서준', '한소희', '수현', '김해숙', '조한철', '위하준'];
const result = document.querySelector('#result');
const check = document.querySelector('#check');

check.addEventListener('click', function () {
 let userValue = document.querySelector('#name').value;
 findNames(userValue);
});

function findNames(name) {
 for (let i = 0; i < roles.length; i++) {
  if (name.length <= 0) {
   result.innerHTML = `
    <p style="text-align:center;font-size:14px;line-height:1.4">입력을 해주세요 >.<<br> "장태상 / 윤채옥 / 마에다 / 나월댁 / 윤종원 / 윤채옥"</p>
  `;
  } else if (name == roles[i]) {
   result.innerHTML = `
      입력하신 배역 "${name}"은 배우 "${actors[i]}"(으)로 등장인물이 맞습니다.
    `;
   break;
  } else {
   result.innerHTML = `
      입력하신 배역 "${name}"은 등장인물이 아닙니다.
    `;
  }
 }
}
