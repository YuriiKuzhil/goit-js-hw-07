const refs = {
  input: document.querySelector('input'),
  createBoxesBtn: document.querySelector('[data-action="render"]'),
  deleteBoxesBtn: document.querySelector('[data-action="destroy"]'),
  wrapperForBoxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  let boxes;
  for (let i = 1; i <= amount; i += 1) {
    let boxWidth = 20 + i * 10 + 'px';
    let boxHeight = 20 + i * 10 + 'px';
    boxes = document.createElement('div');
    boxes.style.backgroundColor = `${randomColors()}`;
    boxes.style.width = `${boxWidth}`;
    boxes.style.height = `${boxHeight}`;
    boxes.style.marginBottom = '10px';
    refs.wrapperForBoxes.append(boxes);
  }
}

function destroyBoxes() {
  refs.wrapperForBoxes.innerHTML = '';
}

function randomColors() {
  const red = Math.floor(Math.random() * (256 - 0) + 0);
  const green = Math.floor(Math.random() * (256 - 0) + 0);
  const blue = Math.floor(Math.random() * (256 - 0) + 0);
  return `rgb(${red}, ${green}, ${blue})`;
}
refs.createBoxesBtn.addEventListener('click', () => {
  const amount = refs.input.value;
  createBoxes(amount);
});
refs.deleteBoxesBtn.addEventListener('click', () => destroyBoxes());
