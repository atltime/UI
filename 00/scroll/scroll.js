'use strict';

// 부트스트랩 스크롤 애니메이션 없애고 싶으면 css에 추가
// :root { scroll-behavior: auto;}
// 회원 약관 다 읽으면 알람 띄우기
let lorem = document.querySelector('.lorem');
lorem.addEventListener('scroll', () => {
 let scrollt = lorem.scrollTop; // 이건 컨텐츠의 길이에서 스크롤된 높이
 let clienth = lorem.clientHeight; // div 실제 높이
 let scrollh = lorem.scrollHeight; // 이건 컨텐츠 전체 길이

 //  console.log(scrollt, clienth, scrollh);

 if (scrollt + clienth > scrollh - 1) {
  alert('약관을 다 읽음');
 }
});

// ㅌ버튼 누르면 위로
const topBtn = document.querySelector('.top');
let contH = document.querySelector('html').scrollHeight;
// let contH = document.documentElement.scrollHeight; 똑같은 코드임
let pageH = document.querySelector('html').clientHeight;

topBtn.addEventListener('click', () => {
 window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

// header 고정 이벤트
window.addEventListener('scroll', function () {
 let y = window.scrollY;
 let headerH = document.querySelector('header').clientHeight;
 //  console.log(y);
 let blackbar = document.querySelector('.black-bar');
 //  console.log(contH, pageH, y, headerH);

 if (y >= headerH) {
  document.querySelector('header').classList.add('fixed');
 } else {
  document.querySelector('header').classList.remove('fixed');
 }

 // 페이지 끝까지 스크롤되면 자동으로 위로 보내기
 if (y + headerH > contH - headerH) {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
 }

 // 현재 스크롤 된 양 바로 표시하기
 let diff = contH - pageH - headerH;
 let barWidth = (y / diff) * 100;
 blackbar.style.width = barWidth + '%';
 //  console.log(`스크롤 위치는 ${y}, 브라우저 크기는 : ${pageH}, 컨텐츠 전체 길이는 : ${contH},현재 바의 넓이는 ${barWidth}%`);
});
