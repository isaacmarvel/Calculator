let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

let display = "";
let firstNumber = 0;
let operatedNumber = 0;
let operator = "";

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}
function displayOnPage(number) {
  display += number;
  document.getElementById("displayField").innerHTML = display;
}

let button1 = document.querySelector("#button1");
button1.addEventListener("click", () => {
  displayOnPage(1);
});

let button2 = document.querySelector("#button2");
button2.addEventListener("click", () => {
  displayOnPage(2);
});

let button3 = document.querySelector("#button3");
button3.addEventListener("click", () => {
  displayOnPage(3);
});

let button4 = document.querySelector("#button4");
button4.addEventListener("click", () => {
  displayOnPage(4);
});

let button5 = document.querySelector("#button5");
button5.addEventListener("click", () => {
  displayOnPage(5);
});

let button6 = document.querySelector("#button6");
button6.addEventListener("click", () => {
  displayOnPage(6);
});

let button7 = document.querySelector("#button7");
button7.addEventListener("click", () => {
  displayOnPage(7);
});

let button8 = document.querySelector("#button8");
button8.addEventListener("click", () => {
  displayOnPage(8);
});

let button9 = document.querySelector("#button9");
button9.addEventListener("click", () => {
  displayOnPage(9);
});

let button0 = document.querySelector("#button0");
button0.addEventListener("click", () => {
  displayOnPage(0);
});

let decimalButton = document.querySelector("#decimalButton");
decimalButton.addEventListener("click", () => {
  display += ".";
  document.getElementById("displayField").innerHTML = display;
});

let backspaceButton = document.querySelector("#backspaceButton");
backspaceButton.addEventListener("click", () => {
  display = display.substring(0, display.length - 1);
  document.getElementById("displayField").innerHTML = display;
});

function nanChecker() {
  if (operatedNumber === NaN || operatedNumber === Infinity) {
    document.getElementById("displayField").innerHTML =
      "That's not a number, try again";
    firstNumber = 0;
    operatedNumber = 0;
    operator = "";
    display = "";
  } else {
    firstNumber = operatedNumber;
    display = "";
    document.getElementById("displayField").innerHTML =
      Math.round(firstNumber * 100) / 100;
  }
}

function operatorLogic(operatorSign) {
  if (operator === "") {
    firstNumber = Number(display);
    display = "";
    operator = operatorSign;
    console.log(operator);
    document.getElementById("displayField").innerHTML =
      Math.round(display * 100) / 100;
  } else {
    operatedNumber = operate(operator, firstNumber, Number(display));
    nanChecker();
  }
}

let plusButton = document.querySelector("#plusButton");
plusButton.addEventListener("click", () => {
  operatorLogic("+");
});

let minusButton = document.querySelector("#minusButton");
minusButton.addEventListener("click", () => {
  operatorLogic("-");
});

let multiplyButton = document.querySelector("#multiplyButton");
multiplyButton.addEventListener("click", () => {
  operatorLogic("*");
});

let divideButton = document.querySelector("#divideButton");
divideButton.addEventListener("click", () => {
  operatorLogic("/");
});

let equalsButton = document.querySelector("#equalsButton");
equalsButton.addEventListener("click", () => {
  display = operate(operator, firstNumber, Number(display));
  if (display === NaN || display === Infinity) {
    document.getElementById("displayField").innerHTML =
      "That's not a number, try again";
    firstNumber = 0;
    operatedNumber = 0;
    operator = "";
    display = "";
  } else {
    document.getElementById("displayField").innerHTML =
      Math.round(display * 100) / 100;
  }
});

let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
  firstNumber = 0;
  operatedNumber = 0;
  operator = "";
  display = "";
  document.getElementById("displayField").innerHTML = display;
});
