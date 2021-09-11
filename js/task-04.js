//   <div id="counter">
//       <button type="button" data-action="decrement">-1</button>
//       <span id="value">0</span>
//       <button type="button" data-action="increment">+1</button>
//     </div>



const btnDecrementEl = document.querySelector('[data-action="decrement"]')
const btnIncrementEl = document.querySelector('[data-action="increment"]')
const counterEl = document.querySelector('#value')
let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    counterEl.textContent = counterValue
}
btnDecrementEl.addEventListener('click', decrement);

const increment  = () => {
    counterValue += 1;
    counterEl.textContent = counterValue
}
btnIncrementEl.addEventListener('click', increment);

