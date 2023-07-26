let displayValue = "";

function updateDisplay(){
    const display = document.getElementById("display");
    display.value = displayValue;
}

function appendNumber(number){
    displayValue += number;
    updateDisplay();
}
function appendOperator(operator) {
    if (displayValue !== "") {
        displayValue += operator;
        updateDisplay();
    }
}
function appendDecimalPoint(){
    if(!displayValue.includes(".")){
        displayValue += ".";
        updateDisplay();
    }
}

function clearDisplay(){
    displayValue = "";
    updateDisplay();
}

function removeLastChar(){
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculateResult(){
    try{
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    }
    catch (error){
        displayValue = "Error";
        updateDisplay();
    }
}

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key)){
        appendNumber(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendOperator(key);
    } else if (key === "." || key === ",") {
        appendDecimalPoint();
    } else if (key === "Enter" || key === "=") {
        calculateResult();
    } else if (key === "Backspace") {
        removeLastChar();
    } else if (key === "Escape" || key === "C" || key === "c") {
        clearDisplay();
    }
});

updateDisplay();