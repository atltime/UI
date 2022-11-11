'use strict';
let userChoice = document.querySelector('#clothes');
let createSelect = document.querySelectorAll('.form-select');

let hatSizes = [56, 57, 58, 59];
let shirtSizes = [85, 90, 95, 100, 105, 110];
let pantSizes = [28, 30, 32, 34];

userChoice.addEventListener('input', function () {
 let curr = this.value;

 if (curr == 'hats') {
  optionInit('hats', hatSizes);
 } else if (curr == 'shirts') {
  optionInit('shirts', shirtSizes);
 } else if (curr == 'pants') {
  optionInit('pants', pantSizes);
 }
});

function optionInit(item, sizes) {
 createSelect[1].classList.remove('hide', 'pants', 'shirts', 'hats');
 createSelect[1].innerHTML = '';
 createSelect[1].classList.add(item);
 sizes.forEach((size) => {
  let template = `<option value="${size}">${size}</option>`;
  createSelect[1].insertAdjacentHTML('beforeend', template);
 });
}

// jQuery라면
// $('#clothes').on('input', function () {
//  let curr = $(this).val();

//  if (curr == 'hats') {
//   optionInit('hats', hatSizes);
//  } else if ((curr = 'shirts')) {
//   optionInit('shirts', shirtSizes);
//  } else if (curr == 'pants') {
//   optionInit('pants', pantSizes);
//  }
// });

// function optionInit(item, array) {
//  $('.form-select').eq(1).removeClass('hide hats shirts pants');
//  $('.form-select').eq(1).addClass(item);
//  $('.form-select').eq(1).html('');
//  for (let i = 0; i < array.length; i++) {
//   $('.form-select').eq(1).append(`
//   <option value="${array[i]}">${array[i]}</option>
//   `);
//  }
// }
