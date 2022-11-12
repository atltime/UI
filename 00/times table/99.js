'use strict';

const check = document.querySelector('#check');
const result = document.querySelector('#result');
const reset = document.querySelector('.reset');
const allShow = document.querySelector('.allshow');

check.addEventListener('click', () => {
 let times = document.querySelector('#times').value;
 timesTables(times);
});

reset.addEventListener('click', () => {
 document.querySelector('#times').value = '';
 result.innerHTML = '';
});

allShow.addEventListener('click', () => {
 allTimesTable();
});

function timesTables(number) {
 let num = Number(number);
 if (number.length <= 0) {
  console.log(typeof number);
  result.innerHTML = '값을 입력하지 않았어요 >.<';
 } else if (num >= 10 || num <= 1) {
  result.innerHTML = '2단부터 9단까지만 입력 가능해요 >.<';
 } else {
  result.innerHTML = '';
  for (let i = 1; i < 10; i++) {
   let template = `${num} x ${i} = ${num * i}<br/>`;
   result.insertAdjacentHTML('beforeend', template);
  }
 }
}

function allTimesTable() {
 result.innerHTML = '';
 for (let k = 2; k < 10; k++) {
  for (let i = 1; i < 10; i++) {
   let template = `${k} x ${i} = ${k * i}<br/>`;
   result.insertAdjacentHTML('beforeend', template);
  }
  result.insertAdjacentHTML('beforeend', '<br><br>');
 }
}
