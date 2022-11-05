'use strict';
const check = document.querySelector('#check');

check.addEventListener('click', () => {
 //.5만원 미만 연 15퍼센
 //.5만원 이상 연 20퍼센트
 let deposit = Number(document.querySelector('#deposit').value);
 let result = document.querySelector('#result');

 if (deposit >= 50000) {
  let totalDeposit = deposit * 1.2 * 1.2;
  let interest = totalDeposit - deposit;
  result.innerHTML = `
    2년동안 이자가 ${interest.toLocaleString()}원(연이율 20%) 발생해 총 수령액은 ${totalDeposit.toLocaleString()}원 입니다.
  `;
 } else {
  let totalDeposit = deposit * 1.15 * 1.15;
  let interest = totalDeposit - deposit;
  result.innerHTML = `
    2년동안 이자가 ${interest.toLocaleString()}원(연이율 15%) 발생해 총 수령액은 ${totalDeposit.toLocaleString()}원 입니다.
  `;
 }
});
