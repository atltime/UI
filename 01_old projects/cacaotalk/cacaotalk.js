'use strict';

const chatbox = document.querySelector('.chatbox');
const mybubble = document.querySelector('#mybubble');
const send = document.querySelector('#send');

send.addEventListener('click', sendMyText);

function sendMyText() {
 const newMessage = mybubble.value;
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

/* textarea에서 바로 전송하기 추가 */
function sendMyTextByEnter(e) {
 if (e.key === 'Enter' && !e.shiftKey) {
  sendMyText();
  e.preventDefault();
 }
}

mybubble.addEventListener('keypress', sendMyTextByEnter);
