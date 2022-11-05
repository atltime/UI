'use strict';

const checkbtn = document.querySelector('#check');
const result = document.querySelector('#result');

checkbtn.addEventListener('click', (e) => {
 check369();
});

function check369(e) {
 const number = document.querySelector('#number').value;
 console.log(number);
 let intArr = Array.from(String(number));
 let clap = '';
 //  console.log(intArr);

 for (let i = 0; i < intArr.length; i++) {
  if (intArr[i] == 3 || intArr[i] == 6 || intArr[i] == 9) {
   clap += ' 박수';
  }
 }
 if (number.length == 0) {
  result.innerHTML = '아무 것도 입력하지 않았어요!';
  e.preventDefault();
 } else if (number > 100) {
  result.innerHTML = '100 이하의 숫자만 입력 가능해요!';
  e.preventDefault();
 } else if (number <= 0) {
  result.innerHTML = '앗! 정수 1부터 시작해요!';
  e.preventDefault();
 } else if (number == '') {
  result.innerHTML = '숫자를 입력하지 않으셨어요 >.<';
  e.preventDefault();
 }
 if (clap == '') {
  result.innerHTML = '그냥 조용히 계세요 >.<';
 } else {
  result.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/1961/1961390.png" width="200px"><br>
    ${clap}을 치셔야 합니다!
  `;
 }
}
