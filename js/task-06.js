const a = document.getElementById('validation-input')
console.dir(a.dataset.length)

a.addEventListener('blur', onInput)


function onInput(event) {
    const value = a.value.length
    const letters = a.dataset.length
    console.dir(letters);
    console.dir(value.length)
    if (value < letters || value > letters) {
        a.classList.add('invalid')
    }
    else {
        a.classList.add('valid')
    }
}