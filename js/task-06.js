const inputEl = document.querySelector('input');

const checkInputValue = event => {
  let inputValue = event.currentTarget.value.length;
  const correctSymbolsQuantities = Number.parseInt(inputEl.dataset.length);

  if (inputValue === correctSymbolsQuantities) {
    inputEl.classList.replace('invalid', 'valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('input', checkInputValue);
