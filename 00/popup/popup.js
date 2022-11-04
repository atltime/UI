'use strict';

const goLogin = document.querySelector('#goLogin');
const popup = document.querySelector('#popup');
const close = document.querySelector('#close');
const send = document.querySelector('#send');

goLogin.addEventListener('click', () => {
 document.querySelector('.container p').classList.add('hide');
 popup.classList.add('show');
 popup.firstElementChild.classList.add('active');
});

close.addEventListener('click', () => {
 document.querySelector('.container p').classList.remove('hide');
 popup.classList.remove('show');
 popup.firstElementChild.classList.remove('active');
});

send.addEventListener('click', (e) => {
 if (document.querySelector('#email').value == '') {
  e.preventDefault();
  alert('이메일을 입력하세요');
 } else if (document.querySelector('#password').value == '') {
  e.preventDefault();
  alert('패스워드를 입력하세요');
 } else if (document.querySelector('#password').value.length < 6) {
  e.preventDefault();
  alert('비밀번호가 너무 짧습니다.');
 }
});
