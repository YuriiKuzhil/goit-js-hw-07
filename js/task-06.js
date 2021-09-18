const inputEl = document.querySelector('input');

// const checkInputValue = event => {
//   let inputValue = event.currentTarget.value.length;
//   const correctSymbolsQuantities = Number.parseInt(inputEl.dataset.length);

//   if (inputValue === correctSymbolsQuantities) {
//     inputEl.classList.replace('invalid', 'valid');
//   } else {
//     inputEl.classList.remove('valid');
//     inputEl.classList.add('invalid');
//   }
// };

const checkInputValue = event => {
  let inputValue = event.currentTarget.value.length;
  const correctSymbolsQuantities = Number.parseInt(inputEl.dataset.length);

  inputEl.classList.add('invalid');

  inputValue === correctSymbolsQuantities
    ? inputEl.classList.replace('invalid', 'valid')
    : inputEl.classList.replace('valid', 'invalid');
};

inputEl.addEventListener('input', checkInputValue);
