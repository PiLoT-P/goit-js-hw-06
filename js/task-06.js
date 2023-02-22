'use strict'

const textInput = document.querySelector('#validation-input');

function valids(event) {
    if (textInput.value.length == textInput.dataset.length) {
        textInput.setAttribute('class', 'valid');
    } else {
        textInput.setAttribute('class', 'invalid');
    }
}

textInput.addEventListener('blur', valids);