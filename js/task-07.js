const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const size = slider.value;
text.style.fontSize = size + 'px';
    slider.addEventListener('input', (event) => { 
        const size = slider.value;
        text.style.fontSize = size + 'px';
});