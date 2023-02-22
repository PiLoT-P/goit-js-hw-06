'use strict'

const lineInput = document.querySelector('input#font-size-control');
const text = document.querySelector('#text');

function replaceSize(event) {
    text.style.fontSize = `${lineInput.value}px`;
}

lineInput.addEventListener('input', replaceSize);