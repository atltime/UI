// 'use strict';
let $userChoice = document.querySelector('#clothes');
let $shirtSize = document.querySelector('#shirtSize');

$userChoice.addEventListener('input', () => {
 if ($userChoice.value == 'shirts') {
  $shirtSize.classList.remove('hide');
 } else {
  $shirtSize.classList.add('hide');
 }
});

//jQuery라면
// $('#clothes').on('input', function (e) {
//  let value = $(this).val();
//  if (value == 'shirts') {
//   $('#shirtSize').removeClass('hide');
//  } else {
//   $('#shirtSize').addClass('hide');
//  }
// });
