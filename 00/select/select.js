// 'use strict';
let userChoice = document.querySelector('#clothes');
let createSelect = document.querySelectorAll('.form-select');

userChoice.addEventListener('input', () => {
 if (userChoice.value == 'hats') {
  selectInit(57, 58);
 } else if (userChoice.value == 'shirts') {
  selectInit(95, 100);
 } else if (userChoice.value == 'pants') {
  selectInit(29, 30);
 }
});

function selectInit(value1, value2) {
 createSelect[1].innerHtml = '';
 createSelect[1].classList.remove('hide');
 let template = `
    <option value="${value1}">${value1}</option>
    <option value="${value2}">${value2}</option>
`;
 createSelect[1].innerHTML = template;
}

//jQuery라면
// $('#clothes').on('input', function (e) {
//  let value = $(this).val();
//  if (value == 'shirts') {
//   selectInit(95, 100);
//  } else if (value == 'pants') {
//   selectInit(28, 30);
//  } else if (value == 'hats') {
//   selectInit(57, 58);
//  }
// });

// function selectInit(value1, value2) {
//  $('.form-select').eq(1).removeClass('hide');
//  $('.form-select').eq(1).html('');
//  let template = `
//       <option value="${value1}">${value1}</option>
//       <option value="${value2}">${value2}</option>
//     `;
//  $('.form-select').eq(1).append(template);
// }
