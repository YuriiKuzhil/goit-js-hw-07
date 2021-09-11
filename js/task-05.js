const inputEl = document.querySelector('#name-input')
const spanEL = document.querySelector('#name-output')



const onInputChange = (event) => {
  
    event.currentTarget.value === "" ? spanEL.textContent = 'незнакомец' : spanEL.textContent = event.currentTarget.value
}

inputEl.addEventListener('input', onInputChange)
