'use strict';

const goLogin = document.querySelector('#goLogin');
const popup = document.querySelector('#popup');
const close = document.querySelector('#close');
const send = document.querySelector('#send');
let userEmailAddr = document.querySelector('#email').value;
let userPassword = document.querySelector('#password').value;

goLogin.addEventListener('click', () => {
 popupOpen();
});

close.addEventListener('click', () => {
 popupInit();
});

popup.addEventListener('click', (e) => {
 if (e.target == popup) {
  popupInit();
 }
});

send.addEventListener('click', (e) => {
 if (userEmailAddr == '') {
  e.preventDefault();
  alert('이메일을 입력하세요');
 } else if (userPassword == '') {
  e.preventDefault();
  alert('패스워드를 입력하세요');
 } else if (userPassword.length < 6) {
  e.preventDefault();
  alert('비밀번호가 너무 짧습니다.');
 } else if (/[A-Z]/.test(userPassword) == false) {
  e.preventDefault();
  alert('대문자가 하나 포함되어야 합니다.');
 }
});

function popupInit() {
 document.querySelector('.container p').classList.remove('hide');
 popup.classList.remove('show');
 popup.firstElementChild.classList.remove('active');
}

function popupOpen() {
 document.querySelector('.container p').classList.add('hide');
 popup.classList.add('show');
 popup.firstElementChild.classList.add('active');
}
