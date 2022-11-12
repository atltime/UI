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
 for (let i = 0; i < actors.length; i++) {
  if (name.length <= 0) {
   result.innerHTML = `
    <p style="text-align:center;font-size:14px;line-height:1.4">입력을 해주세요 >.<<br> "박서준, 한소희, 수현, 김해숙, 조한철, 위하준"</p>
  `;
  } else if (name == actors[i]) {
   result.innerHTML = `
      입력하신 "${name}"님 배우는 "${roles[i]}" 역으로 출연합니다.
    `;
   break;
  } else {
   result.innerHTML = `
      입력하신 "${name}"님은 출연진이 아닙니다.
    `;
  }
 }
}
