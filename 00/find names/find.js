'use strict';

const roles = ['장태상', '윤채옥', '마에다', '나월댁', '윤종원', '권준택'];
const actors = ['박서준', '한소희', '수현', '김해숙', '조한철', '위하준'];
const casts = [
 { role: '장태상', cast: '박서준' },
 { role: '윤채옥', cast: '한소희' },
 { role: '마에다', cast: '수현' },
 { role: '나월댁', cast: '김해숙' },
 { role: '윤종원', cast: '조한철' },
 { role: '권준택', cast: '위하준' },
];
const result = document.querySelector('#result');
const check = document.querySelector('#check');

check.addEventListener('click', function () {
 let userValue = document.querySelector('#name').value;
 //  findNames(userValue);
 //  findNames2(userValue);
 findNames3(userValue);
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

//for of로 해보기
function findNames2(name) {
 for (let actor of actors) {
  if (name.length <= 0) {
   result.innerHTML = `
     <p style="text-align:center;font-size:14px;line-height:1.4">입력을 해주세요 >.<<br> "박서준, 한소희, 수현, 김해숙, 조한철, 위하준"</p>
   `;
  } else if (name == actor) {
   let idx = actors.indexOf(actor);
   //  console.log(idx);
   result.innerHTML = `
    입력하신 "${name}"님 배우는 "${roles[idx]}" 역할로 출연합니다.
  `;
   break;
  } else {
   result.innerHTML = `
    입력하신 "${name}"님 배우는 출연하지 않습니다.
  `;
  }
 }
}

//find함수로 해보기
function findNames3(name) {
 casts.find((cast, idx) => {
  if (name.length <= 0) {
   result.innerHTML = `
    <p style="text-align:center;font-size:14px;line-height:1.4">입력을 해주세요 >.<<br> "박서준, 한소희, 수현, 김해숙, 조한철, 위하준"</p>
  `;
  } else if (name == cast.cast) {
   result.innerHTML = `
    입력하신 "${name}"님 배우는 "${cast.role}" 역할로 출연합니다.
  `;
  }
 });
}
