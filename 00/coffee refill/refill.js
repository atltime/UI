'use strict';
const check = document.querySelector('#check');

check.addEventListener('click', () => {
 // 방금 마신 커피의 2/3만큼 총 2번 리필 해줌
 // 90ml => 60ml => 40ml 이러헥 총 100ml 리필 받을 수 있음
 let result = document.querySelector('#result');
 let first = Number(document.querySelector('#coffee').value);
 let second = Math.round(first * (2 / 3));
 let third = Math.round(second * (2 / 3));
 let totalRefill = second + third;
 //  console.log(second);
 result.innerHTML = `
  주문하신 커피 양 ${first} 용량에는 첫 리필시 ${second} 만큼, 두 번째 리필시 ${third}만큼 받을 수 있습니다. 총 리필 가능한 양은 ${totalRefill}이며, 모두 마실 경우 ${
  first + totalRefill
 }만큼 드실 수 있습니다.
 `;
});
