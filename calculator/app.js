const display = document.querySelector('#display');

function displayCalculation(expression) {
    display.value = display.value + expression;
    // console.log(display.value);
}


function resultButton() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR"
    }
}


function clearDisplay() {
    display.value = "";
}