'use strict';

const checkbtn = document.querySelector('#check');
const result = document.querySelector('#result');

checkbtn.addEventListener('click', () => {
 check369();
});

function check369() {
 const number = document.querySelector('#number').value;
 let intArr = Array.from(String(number));
 let clap = '';
 //  console.log(intArr);

 for (let i = 0; i < intArr.length; i++) {
  if (intArr[i] == 3 || intArr[i] == 6 || intArr[i] == 9) {
   clap += ' 박수';
  }
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
