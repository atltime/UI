'use strict';
const scrollbox = document.querySelector('.sticky-scroll');
const textNode = document.querySelector('#text');
let idNum = 0;

for (idNum = 1; idNum < 6; idNum++) {
 copyText();
}
textNode.remove();

function copyText() {
 //  idNum++;
 const newTextNode = textNode.cloneNode(true);
 newTextNode.id = 'text' + idNum;

 //  textNode.after(newTextNode);
 scrollbox.insertAdjacentElement('beforeend', newTextNode);
}
const cards = document.querySelectorAll('.cardbox');
const cardHeight = cards[0].scrollHeight;
window.addEventListener('scroll', function () {
 let h = window.scrollY;
 console.log(h);

 // n = a * 높이 + b
 let a = -1 / 512;
 let b = -1200 * a;
 let y = a * h + b;

 let za = -0.1 / 512;
 let zb = 1 - 788 * za;
 let z = za * h + zb;
 console.log(b);

 cards[0].style.opacity = y;
 cards[0].style.transform = `scale(${z})`;
});
