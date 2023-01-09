'use strict';

// <span class="circle" style="top:27px; left82px;">

const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
 button.addEventListener('click', function (e) {
  const x = e.clientX;
  const y = e.clientY;
  //   console.log(x, y);
  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  const xInside = x - buttonTop;
  const yInside = y - buttonLeft;

  console.log(xInside, yInside);

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.left = xInside + 'px';
  circle.style.top = yInside + 'px';

  this.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
 });
});
