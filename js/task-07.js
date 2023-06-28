const slider = document.getElementById('font-size-control');
const text = document.getElementById('text');

console.dir(slider.value)
console.dir(text)


slider.addEventListener('input', onSlider);
function onSlider() {
    const fontSize = slider.value + 'px';
    text.style.fontSize = fontSize;
  }