// 'use strict';

const toggle = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

toggle.addEventListener('click', (e) => {
 const html = document.querySelector('html');
 if (html.classList.contains('dark')) {
  html.classList.remove('dark');
  e.target.innerHTML = 'Dark Mode';
 } else {
  html.classList.add('dark');
  e.target.innerHTML = 'Light Mode';
 }
});

function setTime() {
 const time = new Date();
 const month = time.getMonth();
 const day = time.getDay();
 const date = time.getDate();
 const hours = time.getHours();
 const hoursForClock = hours >= 13 ? hours % 12 : hours;
 const minutes = time.getMinutes();
 const seconds = time.getSeconds();
 const ampm = hours >= 12 ? 'PM' : 'AM';

 hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
 minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg);`;
 secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg);`;
 timeEl.innerHTML = `${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
 dateEl.innerHTML = `${days[day]}, ${months[month]}`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
 return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 1000);
