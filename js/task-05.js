
const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener('input', onInputOutput)

function onInputOutput(event) {
    const name = event.currentTarget.value
if(name !== '') {
    nameOutput.textContent = name
}
else {
    nameOutput.textContent = 'Anonymous'
}
    
}
