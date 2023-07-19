const inputArea = document.querySelector('#name-input');
const outputArea = document.querySelector('#name-output');

inputArea.addEventListener('input', () => {
    if (!inputArea.value) {
        outputArea.innerHTML = 'Anonymous';
    } else {
        outputArea.innerHTML = inputArea.value;
    };
});