'use strict';

const menuToggler = document.querySelector('.navbar-toggler');

menuToggler.addEventListener('click', () => {
 document.querySelector('.list-group').classList.toggle('show');
});

document.getElementById('login').addEventListener('click', () => {
 document.getElementById('popup').classList.add('show');
});

document.getElementById('close').addEventListener('click', () => {
 document.getElementById('popup').classList.remove('show');
});

// 전송버튼 누르면
// 저기 input에 입력한 값이 공백이면 알림창 띄우기

document.getElementById('send').addEventListener('click', (e) => {
 if (document.getElementById('email').value == '') {
  e.preventDefault();
  alert('아이디 입력해주세요');
 }
 if (document.getElementById('password').value == '') {
  e.preventDefault();
  alert('패스워드를 입력해주세요');
 } else if (document.getElementById('password').value.length < 6) {
  e.preventDefault();
  alert('패스워드를 조금만 더 길게 써주세요');
 }
});

// jQuery는 form에 submit으로 이벤트를 처리할 수 있다.
// $('form').on('submit', function (e) {});

// input에 입력한 값이 변할 때 쓰는 이벤트,
// input는 바로 실시간 변함, 그래서 글자수만큼 콘솔로그가 나오고
// change는 input에 입력한 값이 바뀌고 포커스를 잃었을 때 발생, 이건 행위당 한 번씩
// truey values <= 0 제외 숫자, '문자', [],{}
// falsy values <= 0, '',null, undefined, NaN
document.getElementById('email').addEventListener('change', () => {});

//369게임 카드

document.getElementById('369btn').addEventListener('click', (e) => {
 e.preventDefault();
 multiplicationGame();
});
document.getElementById('realestateBtn').addEventListener('click', (e) => {
 e.preventDefault();
 getRealestateScore();
});

function multiplicationGame() {
 let num = document.getElementById('369numValue').value;
 var intArr = Array.from(String(num));
 let clap = '';
 console.log(intArr);

 for (let i = 0; i < intArr.length; i++) {
  if (intArr[i] == '3' || intArr[i] == '6' || intArr[i] == '9') {
   clap = clap + ' 박수';
  }
 }
 if (clap == '') {
  document.getElementById('369actionText').innerHTML = `요청하신 숫자 ${num}에는 '조용히' 계십시요`;
 } else {
  document.getElementById('369actionText').innerHTML = `요청하신 숫자 ${num}에는 '${clap}'를 치셔야 합니다.`;
 }
 //  console.log(박수 == '' ? '통과' : 박수);
}

function getRealestateScore() {
 const score1 = parseInt(document.getElementById('score1').value);
 const score2 = parseInt(document.getElementById('score2').value);
 const everage = (score1 + score2) / 2;

 if (score1 < 0 || score2 < 0 || score1 > 100 || score2 > 100) {
  alert('시험점수를 바르게 입력하세요.');
 } else if (score1 < 40 || score2 < 40) {
  document.querySelector('#esatePassResult').innerHTML = `과목1의 점수는 ${score1}, 과목2의 점수는 ${score2}로, 평균 점수 ${everage}, 안타깝지만 불합격입니다.`;
 } else if (score1 + score2 >= 120) {
  document.querySelector('#esatePassResult').innerHTML = `과목1의 점수는 ${score1}, 과목2의 점수는 ${score2}로, 평균 점수 ${everage}, 합격입니다`;
 } else {
  document.querySelector('#esatePassResult').innerHTML = `과목1의 점수는 ${score1}, 과목2의 점수는 ${score2}로, 평균 점수 ${everage}, 불합격입니다`;
 }
}

// Dark 모드
let count = 0;
const body = document.querySelector('body');
const badge = document.querySelector('.badge');
const navbar = document.querySelector('nav');
badge.addEventListener('click', () => {
 count++;
 if (count % 2 == 1) {
  badge.innerHTML = 'Light mode';
  body.classList.add('dark');
  navbar.classList.remove('navbar-light', 'bg-light');
  navbar.classList.add('navbar-dark', 'bg-dark');
 } else {
  badge.innerHTML = 'Dark mode';
  body.classList.remove('dark');
  navbar.classList.remove('navbar-dark', 'bg-dark');
  navbar.classList.add('navbar-light', 'bg-light');
 }
});
