const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients')

const createItemsForList = (ingredients) => {
return ingredients.map(ingredient => {
  const itemEl = document.createElement('li')
  itemEl.textContent = ingredient
  return itemEl
})
}
const listItems = createItemsForList(ingredients)
listEl.append(...listItems)