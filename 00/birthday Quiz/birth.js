'use strict';
const check = document.querySelector('#check');
let count = 0;

check.addEventListener('click', (e) => {
 const birthyear = 1335;
 let answer = document.querySelector('#answer').value;
 let result = document.querySelector('#result');
 count++;

 if (answer.length == 0) {
  result.innerHTML = '입력을 하셔야 합니다 :)';
 } else if (answer == birthyear) {
  result.innerHTML = '정답입니다 :)';
  return false;
 } else if (answer != birthyear) {
  //   console.log(count);
  result.innerHTML = '아쉽네요 >.<';

  if (count >= 3) {
   result.innerHTML = '이제 그만 -.-';
   document.querySelector('#answer').disabled = true;
   check.disabled = 'true';
  }
 }
});
