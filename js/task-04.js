'use strict'

const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');
const number = document.querySelector('#value');
let counterValue = 0;

function decrements(event) {
    counterValue -= 1;
    number.textContent = counterValue;
}

function increments(event) {
    counterValue += 1;
    number.textContent = counterValue;
}

minusButton.addEventListener('click', decrements);
plusButton.addEventListener('click', increments);
