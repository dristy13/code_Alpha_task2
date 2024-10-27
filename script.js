function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        // Replace power operation and square/cube calculations
        let expression = display.value.replace(/Math\.pow\(([^,]+),\s*([^\\)]+)\)/g, '($1**$2)');
        expression = expression.replace(/\*\*2/g, 'Math.pow(' + display.value + ', 2)');
        expression = expression.replace(/\*\*3/g, 'Math.pow(' + display.value + ', 3)');
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}
