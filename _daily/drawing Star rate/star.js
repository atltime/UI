'use strict';

function drawUserStarRating() {
 const starRating = document.querySelector('.user-star_rating');
 const starRatingNum = Number(starRating.dataset.starRate);
 const starLefted = 5 - starRatingNum;

 for (let i = 0; i < starRatingNum; i++) {
  let star = document.createElement('span');
  star.className = 'fa-star';
  star.className += ' fa-solid';
  starRating.append(star);
 }

 for (let i = 0; i < starLefted; i++) {
  let star = document.createElement('span');
  star.className = 'fa-star';
  star.className += ' fa-regular';
  starRating.append(star);
 }
}

drawUserStarRating();
