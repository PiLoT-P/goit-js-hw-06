'use strict'

const form = document.querySelector('.login-form');

function hundelSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Please fill in all the line');
    }

    console.log(`login: ${email.value} \npassword: ${password.value}`);
    event.currentTarget.reset();
}


form.addEventListener('submit', hundelSubmit);
