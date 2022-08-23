function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

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
let display = "";
console.log(display);
//function that populates display when i click number button, storing them to display value.

//need to have them display on apge with event listener
let displayButton1 = function () {
  display + 1;
};
let displayButton2 = function () {
  display + 2;
};
let displayButton3 = function () {
  display + 3;
};
let displayButton4 = function () {
  display + 4;
};
let displayButton5 = function () {
  display + 5;
};
let displayButton6 = function () {
  display + 6;
};
let displayButton7 = function () {
  display + 7;
};
let displayButton8 = function () {
  display + 8;
};
let displayButton9 = function () {
  display + 9;
};
let displayButton0 = function () {
  display + 0;
};

let firstNumber;
//function to save display:
let operatorPressed = function(operatorYouClicked) {
  firstNumber = display;
  operator = operatorYouClicked;
  display = "";
}

//whne operator is pressed, run function to save display, save operation chosen, and operated on them when = is pressed.

//store first number input into the calc when a user presses an operator, save operation chosen, operate on them when = is pressed.
// document.getElementById("")