const refs = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value')
}

console.dir(refs.value)

let counterValue = 0;

refs.decrement.addEventListener('click', onBtnDecrement)
refs.increment.addEventListener('click', onBtnIncrement)

function onBtnDecrement() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
    console.log(counterValue)
}

function onBtnIncrement() {
    counterValue += 1;
    refs.value.textContent = counterValue;
    console.log(counterValue)
}