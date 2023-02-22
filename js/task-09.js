'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('button.change-color');
const body = document.querySelector('body')
const line = document.querySelector('span.color');

function replaceColor(event) {
  let bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  line.textContent = `-${bgColor}`;
}

button.addEventListener('click', replaceColor);