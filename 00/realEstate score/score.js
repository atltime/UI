'use strict';
const check = document.querySelector('#check');

const congraImg = 'https://cdn-icons-png.flaticon.com/512/4245/4245652.png';

check.addEventListener('click', (e) => {
 let subject1 = document.querySelector('#subject1').value;
 let subject2 = document.querySelector('#subject2').value;
 let result = document.querySelector('#result');
 let score1 = Number(subject1);
 let score2 = Number(subject2);
 let total = score1 + score2;
 let average = total / 2;
 console.log(total);
 console.log(average);

 if (subject1.length == 0 || subject2.length == 0) {
  result.innerHTML = `입력을 아예 안했어요!`;
  e.preventDefault();
 } else if (score1 < 0 || score2 < 0 || score1 > 100 || score2 > 100) {
  result.innerHTML = `0 ~ 100점 사이의 점수를 제대로 입력해주세요!`;
 } else if (total >= 120 && (score1 < 40 || score2 < 40)) {
  result.innerHTML = `앗, 평균 ${average}점이지만, 기준 미달 과목이 있어 안타깝지만 "불합격"입니다.`;
 } else if (total >= 120) {
  result.innerHTML = `
    <img src="${congraImg}" width="200px"><br>
    축하드립니다. 평균 ${average}점으로 합격하셨어요 :)
    `;
 } else {
  result.innerHTML = '"불합격"입니다.';
 }
});
