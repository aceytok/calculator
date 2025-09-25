// Variables for basic math operations
let num1 = 0;
let operator = "";
let num2 = 0;
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
console.log(addNumbers(1,1));
console.log(subtractNumbers(4,1));
console.log(multiplyNumbers(2,5));
console.log(divideNumbers(2, 2));