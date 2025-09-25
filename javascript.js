// Variables for basic math operations
let num1 = 0;
let operator = "";
let num2 = 0;

// Variables for buttons to change display
const oneButton = document.querySelector(".one-button")
const twoButton = document.querySelector(".two-button")
const threeButton = document.querySelector(".three-button")
const fourButton = document.querySelector(".four-button")
const fiveButton = document.querySelector(".five-button")
const sixButton = document.querySelector(".six-button")
const sevenButton = document.querySelector(".seven-button")
const eightButton = document.querySelector(".eight-button")
const nineButton = document.querySelector(".nine-button")
const zeroButton = document.querySelector(".zero-button")

// Basic math functions
function addNumbers(num1,num2) {
    return num1 + num2;
};

function subtractNumbers(num1, num2) {
    return num1 - num2;
};

function multiplyNumbers(num1, num2) {
    return num1 * num2;
};

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "ERROR! Cannot divide by zero"
    } else {
        return num1 / num2;
    };
};

// Operate function
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            addNumbers(num1, num2);
        case "-":
            subtractNumbers(num1, num2);
        case "x":
            multiplyNumbers(num1, num2);
        case "/":
            divideNumbers(num1, num2);

    }
};

function numberDisplay(button) {
    const display = document.querySelector(".display-output");
    const span = document.createElement("span");
    span.textContent = button;
    display.appendChild(span);
    num1 = display.textContent;
    console.log(num1);
};

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

console.log(addNumbers(1,1));
console.log(subtractNumbers(4,1));
console.log(multiplyNumbers(2,5));
console.log(divideNumbers(2, 2));