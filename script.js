const add = function(a, b) {
    let sum = a + b;

    return sum;
};

const subtract = function(a, b) {
    let difference = a - b;

    return difference;
};

const multiply = function(...numbers) {
    let total = 1;
    for(let number of numbers){
      total *= number;
    }
    return total;
};

const divide = function (a, b) {
    let quotient = a / b;

    return quotient;

}