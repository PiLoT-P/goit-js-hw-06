'use strict'

const form = document.querySelector('.login-form');

function hundelSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Please fill in all the line');
    } else {
        const elementObject = {
            email: email.value,
           password: password.value,
        }
        console.log(elementObject);
        event.currentTarget.reset();
    }

}


form.addEventListener('submit', hundelSubmit);
