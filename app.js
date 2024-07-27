
let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '2cab37';


let btn = document.querySelector('.btn');

const name1 = document.querySelector('.greet');
const aboba = document.querySelector('.aboba');
const price = document.querySelector('.price');


let item = '';

btn.addEventListener('click', () => {
    item = name1.value + '  ' + aboba.value + '  ' + price.value;
});

Telegram.WebApp.onEvent('MainButtonCliked', () => {
    tg.sendData(item);
})