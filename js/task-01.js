const allItemsEl = document.querySelectorAll('.item')
console.log(`В списке ${allItemsEl.length} категории.`)

allItemsEl.forEach(item => {
   
    console.log(`Категория: ${item.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`)
})


