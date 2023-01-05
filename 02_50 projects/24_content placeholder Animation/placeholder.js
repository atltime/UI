'use strict';

const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const author_name = document.getElementById('author_name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
 header.innerHTML = `
    <img src="https://images.unsplash.com/photo-1672734281612-8bc05da7fd7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
    `;
 title.innerHTML = `Lorem ipsum dolor sit amet.`;
 excerpt.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis.`;
 profile_img.innerHTML = ` <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="" />`;
 author_name.innerHTML = `John Doe`;
 date.innerHTML = `Oct 08, 2023`;

 animated_bgs.forEach((item) => item.classList.remove('animated-bg'));
 animated_bg_texts.forEach((item) => item.classList.remove('animated-bg-text'));
}
