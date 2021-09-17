const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const defaultInputValue = inputEl.value;
const defaultFontSize = '16px';

const changeTextFontSize = event => {
  let inputValue = event.currentTarget.value;

  spanEl.style.fontSize =
    (inputValue * Number.parseInt(defaultFontSize)) / defaultInputValue + 'px';
};
inputEl.addEventListener('input', changeTextFontSize);
