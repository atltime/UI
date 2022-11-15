'use strict';

let products = [
 { id: 0, price: 70000, title: 'Blossom Dress' },
 { id: 1, price: 50000, title: 'Springfield Shirt' },
 { id: 2, price: 60000, title: 'Black Monastery' },
];

const cardRow = document.querySelector('#cardRow');
const sortByPrice = document.querySelector('#sortByPrice');
const sortByName = document.querySelector('#sortByName');
const sortUnder6 = document.querySelector('#sortUnder6');

moreItems(products);

sortByPrice.addEventListener('click', () => {
 products.sort((a, b) => a.price - b.price);
 cardRow.innerHTML = '';
 moreItems(products);
});
sortByName.addEventListener('click', () => {
 products.sort(function (a, b) {
  if (a.title > b.title) {
   return 1;
  } else if (a.title == b.title) {
   return 0;
  } else {
   return -1;
  }
 });
 cardRow.innerHTML = '';
 moreItems(products);
});
sortUnder6.addEventListener('click', () => {
 let newProducts = products.filter((a) => a.price <= 60000);
 //  console.log(newProducts);
 cardRow.innerHTML = '';
 moreItems(newProducts);
});

let buyBtns = document.querySelectorAll('.buy');
const cartList = document.querySelector('#cartList');

buyBtns.forEach((buy) => {
 buy.addEventListener('click', function () {
  let titleValue = this.parentElement.parentElement.children[0].innerHTML;
  let priceValue = this.previousElementSibling.children[0].innerHTML;

  if (localStorage.getItem('cart') == null) {
   localStorage.setItem('cart', JSON.stringify([{ title: titleValue, price: priceValue }]));
  } else {
   let arr = JSON.parse(localStorage.getItem('cart'));
   let flag = true;
   arr.filter((item) => {
    if (item.title === titleValue) {
     flag = false;
    }
    // console.log(flag);
    return flag;
   });

   if (flag === true) {
    arr.push({ title: titleValue, price: priceValue });
    localStorage.setItem('cart', JSON.stringify(arr));
   }
  }
 });
});

function moreItems(array) {
 array.forEach((item, idx) => {
  let template = `
    <div class="col">
        <div class="card shadow-sm">
            <img src="https://via.placeholder.com/600" class="w-100" alt="" />
            <div class="card-body">
                <p class="card-text">${array[idx].title}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <p>가격 : <span>${array[idx].price}</span></p>
                    <button class="btn btn-primary buy">찜</button>
                </div>
            </div>
        </div>
    </div>
    `;
  cardRow.insertAdjacentHTML('beforeend', template);
 });
}
