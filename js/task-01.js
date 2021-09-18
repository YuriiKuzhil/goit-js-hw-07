// const allItemsEl = document.querySelectorAll('.item')
// console.log(`В списке ${allItemsEl.length} категории.`)

// allItemsEl.forEach(item => {

//     console.log(`Категория: ${item.firstElementChild.textContent}`)
//     console.log(`Количество элементов: ${item.lastElementChild.children.length}`)
// })

const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
  const h2 = node.querySelector('h2');
  const nodeItems = node.querySelectorAll('li');
  console.log(
    ` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`
  );
});
