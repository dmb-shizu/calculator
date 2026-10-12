let num1 = "";
let num2 = "";
let operator = "";

const add = function(a, b) {
    let sum = a + b;

    return sum;
};

const subtract = function(a, b) {
    let difference = a - b;

    return difference;
};

const multiply = function(a, b) {
    let product = a * b;

    return product;
};

const divide = function (a, b) {
    let quotient = a / b;

    return quotient;

}

function operate (operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "invalid operator";
    }
}

console.log(operate("+", 10, 2));