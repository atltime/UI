'use strict';

let count = 5;

let timer = setInterval(function () {
 count--;
 if (count >= 0) {
  document.querySelector('.seconds').innerHTML = count;
 }
}, 1000);

setTimeout(function () {
 document.querySelector('.alert').classList.add('hide');
}, 6000);
