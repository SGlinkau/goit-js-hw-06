let counterValue = 0;
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const counter = document.getElementById('value');

incrementButton.addEventListener("click", () => {
    counterValue += 1;
    counter.innerHTML = counterValue;
})

decrementButton.addEventListener("click", () => { 
    counterValue -= 1;
    counter.innerHTML = counterValue;
})