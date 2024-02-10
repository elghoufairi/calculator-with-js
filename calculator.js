let display = document.getElementById('display');

function appendToDisplay(value) {
    // Prevent consecutive operators and multiple leading zeros
    const lastChar = display.value.slice(-1);
    if ((isNaN(value) && isNaN(lastChar)) || (value === '0' && lastChar === '0')) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = evaluateExpression(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function evaluateExpression(expression) {
    // Use a safer method for evaluating expressions
    return Function('"use strict";return (' + expression + ')')();
}
