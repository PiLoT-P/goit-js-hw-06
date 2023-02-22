'use strict'

const textInput = document.querySelector('input#name-input');
const outputText = document.querySelector('#name-output');

function replaceText(event) {
    if (event.currentTarget.value === '') {
        outputText.textContent = 'Anonymous';
    } else {
        outputText.textContent = event.currentTarget.value;
    }
}

textInput.addEventListener('input', replaceText);