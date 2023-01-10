'use strict';

const slideBox = document.querySelector('.slide_box');
const slides = document.querySelectorAll('.slide_box > li');
const slidePrevBtn = document.querySelector('.slide_controls .prev');
const slideNextBtn = document.querySelector('.slide_controls .next');
const slideCount = slides.length;
const slideWidth = slides[0].offsetWidth;
const slideMargin = 6;
let currentIdx = 0;

// a.cloneNode(), a.cloneNode(true)
// a.appendChild(b) // a.prepend(b)

slideNextBtn.addEventListener('click', () => {
 const nextSlide = slideBox.firstElementChild;
 slideBox.appendChild(nextSlide);
});
slidePrevBtn.addEventListener('click', () => {
 console.log(slideBox.lastElementChild);
 const prevSlide = slideBox.lastElementChild;
 slideBox.prepend(prevSlide);
});
