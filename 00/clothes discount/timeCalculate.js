'use strict';
const check1 = document.querySelector('#check');
const check2 = document.querySelector('#check2');
const result1 = document.querySelector('#result');
const result2 = document.querySelector('#result2');

check.addEventListener('click', function () {
 // 첫 구매이면 1.5달러 추가 할인 해줘야 함
 // 전체 할인은 10%
 let userPrice = parseInt(document.querySelector('#price').value);
 let userDiscount = discount(userPrice, true);

 result1.innerHTML = `
   할인 ${userDiscount}달러를 받아 실구매가 ${userPrice - userDiscount}달러에 구매하실 수 있습니다.
 `;
});

function discount(price, boolean) {
 let discount = price * 0.1;
 if (boolean == true) {
  discount = discount + 1.5;
 }
 return discount;
}

check2.addEventListener('click', (e) => {
 let userMin = parseInt(document.querySelector('#minutes').value);
 let userSec = parseInt(document.querySelector('#seconds').value);

 let userConvertMs = invertSeconds(userMin, userSec);

 invertSeconds(minutes);

 result2.innerHTML = `
        입력하신 ${userMin}분 ${userSec}초는 총 ${userConvertMs}ms 입니다.
    `;
});

function invertSeconds(num1, num2) {
 return (num1 * 60 + num2) * 1000;
}
