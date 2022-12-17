'use strict';

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
 if (link.href.includes(`${activePage}`)) {
  link.closest('li').classList.add('active');
 }
});
