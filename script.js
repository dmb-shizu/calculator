let num1 = "";
let num2 = "";
let operator = "";
let resultShown = false;

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
    if (b === 0) {
        return "Nice try";
    } else {
        return quotient;
    }


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


const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const operators = ["+", "-", "*", "/"];

btns.forEach((btn) => {
     btn.addEventListener("click", () => {
       
        if(!isNaN(btn.textContent)){
            if(resultShown){
                num1 = "";
                num2 = "";
                operator = "";
                resultShown = false;
            }
            if (operator) {
                num2 += btn.textContent;
                display.textContent = num2;
            }else {
                num1 += btn.textContent;
                display.textContent = num1;
            }

        } else if (operators.includes(btn.textContent)){
            if (num1 && num2 && operator) {
                const result = operate(operator, Number(num1), Number(num2));
                if (typeof result === "string") {
                    display.textContent = Math.round(result * 100)/100;
                    num1 = "";
                    num2 = "";
                    operator = "";
                }else {
                    display.textContent = Math.round(result * 100)/100;
                    num1 = display.textContent;
                    num2 = "";
                }
              
            }
            operator = btn.textContent;
            resultShown = false;

            
        } else if (btn.textContent === "=") {
            if (num1 && num2 && operator) {
            const result = operate(operator, Number(num1), Number(num2));
                if (typeof result === "string") {
                    display.textContent = Math.round(result * 100)/100;
                    num1 = "";
                    num2 = "";
                    operator = "";
                } else {
                    display.textContent = Math.round(result * 100)/100;
                    num1 = result;
                    num2 = "";
                    
                }
                resultShown = true;
            }
            

        } else if (btn.textContent === "Clear") {
            num1 = "";
            num2 = "";
            operator = "";
            display.textContent = "";
            resultShown = false;
        }
        
        console.log(display.textContent);


    });
        
});


