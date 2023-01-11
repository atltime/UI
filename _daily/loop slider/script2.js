'use strict';

const slideBox = document.querySelector('.slide_box');
const slides = document.querySelectorAll('.slide_box > li');
const slidePrevBtn = document.querySelector('.slide_controls .prev');
const slideNextBtn = document.querySelector('.slide_controls .next');
const slidePlayBtn = document.querySelector('.slide_controls .play');
const slideStopBtn = document.querySelector('.slide_controls .stop');
let currentIdx = 0;
const duration = 2000;

// a.cloneNode(), a.cloneNode(true)
// a.appendChild(b) // a.prepend(b)

function MovingSlides() {
 const nextSlide = slides[currentIdx];
 console.log(nextSlide);
 slideBox.appendChild(nextSlide);
 currentIdx++;
 if (currentIdx > slides.length - 1) {
  currentIdx = 0;
 }
}

let startSlideTimer = setInterval(MovingSlides, duration);

slideNextBtn.addEventListener('click', () => {
 clearInterval(startSlideTimer);
 const nextSlide = slideBox.firstElementChild;
 slideBox.appendChild(nextSlide);
});
slidePrevBtn.addEventListener('click', () => {
 clearInterval(startSlideTimer);
 const prevSlide = slideBox.lastElementChild;
 slideBox.prepend(prevSlide);
});
slidePlayBtn.addEventListener('click', () => {
 startSlideTimer = setInterval(MovingSlides, duration);
});
slideStopBtn.addEventListener('click', () => {
 clearInterval(startSlideTimer);
});
