'use strict';

const chatbox = document.querySelector('.chatbox');
const mybubble = document.querySelector('#mybubble');
const send = document.querySelector('#send');

send.addEventListener('click', () => sendMyText());

function sendMyText() {
 const newMessage = mybubble.value;
 console.log(newMessage);
 if (newMessage) {
  const div = document.createElement('div');
  div.classList.add('bubble', 'my-bubble');
  div.innerText = newMessage;
  chatbox.append(div);
 } else {
  alert('메세지를 입력하세요...');
 }

 mybubble.value = '';
}
