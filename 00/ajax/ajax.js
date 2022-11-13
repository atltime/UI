'use strict';

let products = [
 { id: 0, price: 70000, title: 'Blossom Dress' },
 { id: 1, price: 50000, title: 'Springfield Shirt' },
 { id: 2, price: 60000, title: 'Black Monastery' },
];

const cardRow = document.querySelector('#cardRow');
const moreItemsBtn = document.querySelector('#moreItems');
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

let count = 0;
moreItemsBtn.addEventListener('click', () => {
 count++;

 fetch(`https://codingapple1.github.io/js/more${count}.json`)
  .then((res) => res.json())
  .then((data) => {
   moreItems(data);
   //    console.log(count);
   if (count >= 2) {
    moreItemsBtn.style.display = 'none';
   }
  })
  .catch((error) => {
   console.log(error);
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
                    <p>가격 : ${array[idx].price}</p>
                </div>
            </div  >
        </div>
    </div>
    `;
  cardRow.insertAdjacentHTML('beforeend', template);
 });
}
