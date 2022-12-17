'use strict';

// .attr()을 통해서는 element가 가지는 속성값이나 정보를 조회(style,src,rowspan 등)하거나 세팅하는 형식
// .prop()을 통해서는 element가 가지는 실제적인 상태(활성화,체크,선택여부 등)을 제어하는 업무

// $(function () {
//  $('#allchecked').on('click', function () {
//   let checked = $(this).is(':checked');

//   if (checked) {
//    $(this).closest('.wrap').find('.form-check-input').prop('checked', true);
//   } else {
//    $(this).closest('.wrap').find('.form-check-input').prop('checked', false);
//   }
//  });
// });

// Vanila JS로 한다면..
// const allChecked = document.querySelector('#allchecked');
// const allCheckedForHobbies = document.querySelector('input[name=hobbyAll]');

// allChecked.addEventListener('change', (e) => {
//  const checked = e.target.checked;
//  let list = document.querySelectorAll('.form-check-input');
//  if (checked) {
//   list.forEach((item) => (item.checked = true));
//  } else {
//   list.forEach((item) => (item.checked = false));
//  }
// });

// allCheckedForHobbies.addEventListener('change', (e) => {
//  const checked = e.target.checked;
//  let list = document.querySelectorAll('input[name=hobby]');
//  if (checked) {
//   list.forEach((item) => (item.checked = true));
//  } else {
//   list.forEach((item) => (item.checked = false));
//  }
// });

//리펙토링
function OnAllCheck(all, items) {
 const allChecked = document.querySelector(all);
 allChecked.addEventListener('change', (e) => {
  const checked = e.target.checked;
  let list = document.querySelectorAll(items);
  if (checked) {
   list.forEach((item) => (item.checked = true));
  } else {
   list.forEach((item) => (item.checked = false));
  }
 });
}

OnAllCheck('#allchecked', '.form-check-input');
OnAllCheck('input[name=hobbyAll]', 'input[name=hobby]');
