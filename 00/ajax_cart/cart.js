'use strict';

const cartList = document.querySelector('#cartStorageList');
showStorageCartList();
const cartReset = document.querySelector('#cartReset');

cartReset.addEventListener('click', () => {
 cartList.innerHTML = '찜하신 상품이 없습니다.';
 localStorage.removeItem('cart');
});

function showStorageCartList() {
 let cart = JSON.parse(localStorage.getItem('cart'));

 if (cart != null) {
  for (let i = 0; i < cart.length; i++) {
   let template = `
        <li class="list-group-item">
        <div>
            <div class="d-inline-block mr-2"><img src="https://via.placeholder.com/60x60?text=Test" /></div>
            <div class="d-inline-block font-weight-bold mr-2">${cart[i].title}</div>
            <div class="d-inline-block">가격 : ${cart[i].price}</div>
        </div>
        </li>
    `;
   cartList.insertAdjacentHTML('beforeend', template);
  }
 } else {
  cartList.innerHTML = '장바구니가 비었습니다.';
 }
}
