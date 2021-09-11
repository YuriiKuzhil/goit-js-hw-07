const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients')

const listItemsEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li')
  itemEl.textContent = ingredient
  return itemEl
})

listEl.append(...listItemsEl)