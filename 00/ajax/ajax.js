'use strict';

let products = [
 { id: 0, price: 70000, title: 'Blossom Dress' },
 { id: 1, price: 50000, title: 'Springfield Shirt' },
 { id: 2, price: 60000, title: 'Black Monastery' },
];

const cardRow = document.querySelector('#cardRow');
const moreItemsBtn = document.querySelector('#moreItems');

moreItems(products);

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
                    <button class="btn btn-primary buy">구매</button>
                </div>
            </div>
        </div>
    </div>
    `;
  cardRow.insertAdjacentHTML('beforeend', template);
 });
}
