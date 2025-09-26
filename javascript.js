// Variables for basic math operations
let currentInput = "";
let operator = "";
let previousInput = "";

// Variables for buttons to change display
const oneButton = document.querySelector(".one-button");
const twoButton = document.querySelector(".two-button");
const threeButton = document.querySelector(".three-button");
const fourButton = document.querySelector(".four-button");
const fiveButton = document.querySelector(".five-button");
const sixButton = document.querySelector(".six-button");
const sevenButton = document.querySelector(".seven-button");
const eightButton = document.querySelector(".eight-button");
const nineButton = document.querySelector(".nine-button");
const zeroButton = document.querySelector(".zero-button");
const addButton = document.querySelector(".add-button");
const subtractButton = document.querySelector(".subtract-button");
const multiplyButton = document.querySelector(".multiply-button");
const divideButton = document.querySelector(".divide-button");
const equalsButton = document.querySelector(".equals-button");
const clearButton = document.querySelector(".clear-button");
const decimalButton = document.querySelector(".decimal-button");

// Variables for display
const displayBottom = document.querySelector(".display-bottom");
const displayTop = document.querySelector(".display-top");

// Basic math functions
function addNumbers(num1,num2) {
    return parseFloat(num1) + parseFloat(num2);
};

function subtractNumbers(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
};

function multiplyNumbers(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
};

function divideNumbers(num1, num2) {
    if (parseFloat(num2) === 0) {
        return "ERROR!";
    } else {
        return parseFloat(num1) / parseFloat(num2);
    };
};

// Operate function
function operate() {
    if (!operator || currentInput === "" || previousInput === "") return;
    let result;
    switch (operator) {
        case "+":
            result = addNumbers(previousInput, currentInput);
            break;
        case "-":
            result = subtractNumbers(previousInput, currentInput);
            break;
        case "*":
            result = multiplyNumbers(previousInput, currentInput);
            break;
        case "/":
            result = divideNumbers(previousInput, currentInput);
            break;
    };
    displayTop.textContent = `${previousInput} ${operator} ${currentInput} =`;
    displayBottom.textContent = result;
    previousInput = result;
    currentInput = "";
    operator = "";
};

function numberDisplay(button) {
    if (displayBottom.textContent.includes(".") && button === ".") return;
    currentInput += button;
    displayBottom.textContent = currentInput;
    console.log(currentInput);
};  

function setOperator(op) {
    if (currentInput === "" && previousInput === "") {
        return;
    }
    if (previousInput && operator && currentInput) {
        operate();
    }
    operator = op;
    previousInput = currentInput || previousInput;
    currentInput = "";
    displayTop.textContent = `${previousInput} ${operator}`;
    displayBottom.textContent = "0";
};

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    displayBottom.textContent = "0";
    displayTop.textContent = "";
}

oneButton.addEventListener("click", () => numberDisplay(1));
twoButton.addEventListener("click", () => numberDisplay(2));
threeButton.addEventListener("click", () => numberDisplay(3));
fourButton.addEventListener("click", () => numberDisplay(4));
fiveButton.addEventListener("click", () => numberDisplay(5));
sixButton.addEventListener("click", () => numberDisplay(6));
sevenButton.addEventListener("click", () => numberDisplay(7));
eightButton.addEventListener("click", () => numberDisplay(8));
nineButton.addEventListener("click", () => numberDisplay(9));
zeroButton.addEventListener("click", () => numberDisplay(0));
addButton.addEventListener("click", () => setOperator("+"));
subtractButton.addEventListener("click", () => setOperator("-"));
multiplyButton.addEventListener("click", () => setOperator("*"));
divideButton.addEventListener("click", () => setOperator("/"));
equalsButton.addEventListener("click", () => operate());
clearButton.addEventListener("click", () => clearDisplay());
decimalButton.addEventListener("click", () => numberDisplay("."));