'use strict';

const activePage = document.location;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
 console.log(activePage.pathname);
 console.log(link.pathname);
 if (link.pathname === activePage.pathname) {
  link.closest('li').classList.add('active');
 }

 // 특정 문자열을 포함하는지 확인하는 메서드
 //  if (link.href.includes(`${activePage}`)) {
 //   link.closest('li').classList.add('active');
 //  }
});
