'use strict';

const checkbtn = document.querySelector('#check');

checkbtn.addEventListener('click', () => {
 check369();
});

function check369() {
 let number = document.querySelector('#number').value;
 let num = Number(number);
 console.log(typeof num);
 let intArr = Array.from(number);
 let clap = '';
 let result = document.querySelector('#result');
 //  console.log(intArr);

 for (let i = 0; i < intArr.length; i++) {
  if (intArr[i] == 3 || intArr[i] == 6 || intArr[i] == 9) {
   clap += ' 박수';
  }
 }
 if (number.length == 0) {
  result.innerHTML = '숫자를 입력하지 않으셨어요 >.<';
  return false;
 } else if (num > 100) {
  result.innerHTML = '100 이하의 숫자만 입력 가능해요!';
  return false;
 } else if (num <= 0) {
  result.innerHTML = '앗! 정수 1부터 시작해요!';
  return false;
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
