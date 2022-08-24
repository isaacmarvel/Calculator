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
  displayOnPage(".");
});

// let backspaceButton = document.querySelector("#backspaceButton");
// function backspaceFunction() {
//   display = display.substring(0, display.length - 1);
//   document.getElementById("displayField").innerHTML = display;
// }

// backspaceButton.addEventListener("click", () => {
//   backspaceFunction();
// });

let negativeButton = document.querySelector("#negativeButton");
negativeButton.addEventListener("click", () => {
  display *= -1;
  document.getElementById("displayField").innerHTML = display;
});

let percentButton = document.querySelector("#percentButton");
percentButton.addEventListener("click", () => {
  display *= .01;
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

document.querySelector("#divideButton");
divideButton.addEventListener("click", () => {
  operatorLogic("/");
});

//equals
function equalsFunction() {
  display = operate(operator, firstNumber, Number(display));
  if (display === NaN || display === undefined || display === Infinity) {
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
}
let equalsButton = document.querySelector("#equalsButton");
equalsButton.addEventListener("click", () => {
  equalsFunction();
});

//clearing
function clearAll() {
  firstNumber = 0;
  operatedNumber = 0;
  operator = "";
  display = "";
  document.getElementById("displayField").innerHTML = display;
}
let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
  clearAll();
});

//keypresses
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "1":
      displayOnPage(1);
      break;
    case "2":
      displayOnPage(2);
      break;
    case "3":
      displayOnPage(3);
      break;
    case "4":
      displayOnPage(4);
      break;
    case "5":
      displayOnPage(5);
      break;
    case "6":
      displayOnPage(6);
      break;
    case "7":
      displayOnPage(7);
      break;
    case "8":
      displayOnPage(8);
      break;
    case "9":
      displayOnPage(9);
      break;
    case "0":
      displayOnPage(0);
      break;
    case ".":
      displayOnPage(".");
      break;
    case "=":
      equalsFunction();
      break;
    case "+":
      operatorLogic("+");
      break;
    case "-":
      operatorLogic("-");
      break;
    case "*":
      operatorLogic("*");
      break;
    case "/":
      operatorLogic("/");
      break;
    // case "Backspace":
    //   backspaceFunction();
    //   break;
    case "c":
      clearAll();
      break;
  }
});

window.displayOnPage = displayOnPage;
