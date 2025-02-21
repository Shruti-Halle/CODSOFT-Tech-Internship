let currentDisplay = '';

function updateDisplay() {
    document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '';
    updateDisplay();
}

function appendNumber(number) {
    currentDisplay += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentDisplay += operator;
    updateDisplay();
}

function calculateResult() {
    try {
        currentDisplay = eval(currentDisplay);
        updateDisplay();
    } catch (error) {
        currentDisplay = 'Error';
        updateDisplay();
    }
}
