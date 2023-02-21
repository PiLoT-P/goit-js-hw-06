'use strict'

const listCategory = document.querySelectorAll('ul#categories > li.item');
console.log('Number of categories: ', listCategory.length);

listCategory.forEach((item) => {
    let paragraph = item.querySelector('h2');
    console.log('Category: ', paragraph.textContent);
    let elements = item.querySelectorAll('ul > li');
    console.log('Elements: ', elements.length);
});