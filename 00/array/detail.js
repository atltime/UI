'use strict';

let flowers = [
 {
  id: 0,
  price: 70000,
  title: 'Blossom Flower',
  img: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3',
  alt: '꽃1',
 },
 {
  id: 1,
  price: 50000,
  title: 'Springfield Flower',
  img: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3dlcnxlbnwwfHwwfHw%3D',
  alt: '꽃2',
 },
 {
  id: 2,
  price: 60000,
  title: 'Happy Flower',
  img: 'https://images.unsplash.com/photo-1595681242679-1b77b1e6a3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D',
  alt: '꽃3',
 },
];

const cardGroup = document.querySelector('.card-group');

for (let i = 0; i < flowers.length; i++) {
 let template = `
    <div class="card">
        <div class="img-box">
            <img src="${flowers[i].img}" alt="${flowers[i].alt}" />
        </div>
        <div class="card-body">
            <h5>${flowers[i].title}</h5>
            <p>가격 : <span>${flowers[i].price}</span></p>
            <button class="btn">주문하기</button>
        </div>
    </div>
 `;
 cardGroup.insertAdjacentHTML('beforeend', template);
}

let car = [
 { name: '아반떼', price: [50000, 3000, 4000], color: 'black' },
 { name: '소나타', price: [50000, 3000, 4000], color: 'black' },
 { name: '그랜저', price: [50000, 3000, 4000], color: 'black' },
];

for (let i = 0; i < car.length; i++) {
 console.log(i);
 let template = `
 <tr>
    <td class="price">${car[i].name}</td>
    <td class="name">${car[i].price[i]}</td>
    <td class="color">${car[i].color}</td>
</tr>`;

 document.querySelector('.basic-table tbody').insertAdjacentHTML('beforeend', template);
}
