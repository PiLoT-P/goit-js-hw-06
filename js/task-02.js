'use strict'

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('ul#ingredients');
const array = []
for (let i = 0; i < ingredients.length; i++) {
  let elmentsIngredients = document.createElement('li');
  elmentsIngredients.textContent = ingredients[i];
  elmentsIngredients.classList.add('item');
  array.push(elmentsIngredients.outerHTML);
}
list.innerHTML += array.join('');