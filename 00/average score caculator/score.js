'use strict';
const check = document.querySelector('#check');
const times = document.querySelectorAll('.time');
const result = document.querySelector('#result');
const current = document.querySelector('#current');

check.addEventListener('click', () => {
 let score = current.value;
 let currentScore = Number(score);

 if (score.length <= 0) {
  result.innerHTML = '점수를 입력하지 않으셨어요 >.<';
 } else if (currentScore > 100 || currentScore < 0) {
  result.innerHTML = '점수를 잘못 입력하셨어요 ^^;;';
 } else {
  result.innerHTML = '';
  showScores([80, 60, 30, 45, 60, 40], currentScore);
 }
});

function showScores(scoreArray, currentScore) {
 showPastScores(scoreArray);
 compareScores(scoreArray, currentScore);
}

function showPastScores(scoreArray) {
 times.forEach((time, idx) => {
  time.value = scoreArray[idx];
 });
}

function compareScores(scoreArray, currentScore) {
 let total = 0;
 for (let i = 0; i < scoreArray.length; i++) {
  let num = Number(scoreArray[i]);
  total += num;
  // console.log(total);
 }
 let finalTotal = Math.round(total / scoreArray.length);

 if (currentScore > finalTotal) {
  let diff = currentScore - finalTotal;
  result.innerHTML = `
    평균점수 ${finalTotal}보다 ${diff} 올랐어요. 화이팅입니다 ^0^
  `;
 } else if (currentScore == finalTotal) {
  result.innerHTML = `
    평균점수 ${finalTotal}와 같은 점수에요. 조금만 더 힘내보세요.
  `;
 } else {
  let diff = finalTotal - currentScore;
  result.innerHTML = `
    평균점수 ${finalTotal}보다 -${diff} 떨어졌네요. 재수 추천 >.<
  `;
 }
}
