const inputArea = document.querySelector('#validation-input');
inputArea.addEventListener('blur', () => { 
    if (inputArea.value.length === 6) {
        inputArea.classList.remove("invalid");
        inputArea.classList.add("valid");
    } else {
        inputArea.classList.remove("valid");
        inputArea.classList.add("invalid");
    }
})