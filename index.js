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

let displayButton1 = function () {
  console.log(display + 1);
  return
};
let displayButton2 = function () {
  return display + 2;
};
let displayButton3 = function () {
  return display + 3;
};
let displayButton4 = function () {
  return display + 4;
};
let displayButton5 = function () {
  return display + 5;
};
let displayButton6 = function () {
  return display + 6;
};
let displayButton7 = function () {
  return display + 7;
};
let displayButton8 = function () {
  return display + 8;
};
let displayButton9 = function () {
  return display + 9;
};
let displayButton0 = function () {
  return display + 0;
};

let button1 = document.querySelector("#button1");
button1.addEventListener("click",()=>{
  display += 1;
  document.getElementById("displayField").innerHTML = display;
});

let button2 = document.querySelector("#button2");
button2.addEventListener("click",()=>{
  display += 2;
  document.getElementById("displayField").innerHTML = display;
});

let button3 = document.querySelector("#button3");
button3.addEventListener("click",()=>{
  display += 3;
  document.getElementById("displayField").innerHTML = display;
});

let button4 = document.querySelector("#button4");
button4.addEventListener("click",()=>{
  display += 4;
  document.getElementById("displayField").innerHTML = display;
});

let button5 = document.querySelector("#button5");
button5.addEventListener("click",()=>{
  display += 5;
  document.getElementById("displayField").innerHTML = display;
});

let button6 = document.querySelector("#button6");
button6.addEventListener("click",()=>{
  display += 6;
  document.getElementById("displayField").innerHTML = display;
});

let button7 = document.querySelector("#button7");
button7.addEventListener("click",()=>{
  display += 7;
  document.getElementById("displayField").innerHTML = display;
});

let button8 = document.querySelector("#button8");
button8.addEventListener("click",()=>{
  display += 8;
  document.getElementById("displayField").innerHTML = display;
});

let button9 = document.querySelector("#button9");
button9.addEventListener("click",()=>{
  display += 9;
  document.getElementById("displayField").innerHTML = display;
});

let button0 = document.querySelector("#button0");
button0.addEventListener("click",()=>{
  display += 0;
  document.getElementById("displayField").innerHTML = display;
});


let firstNumber = 0;
let operator = "";

//These four set firstNumber to display number, sets operator, and resets display
let plusButton = document.querySelector("#plusButton");
plusButton.addEventListener("click",()=>{
  firstNumber = Number(display);
  // operator = "plus";
  display = "";
  document.getElementById("displayField").innerHTML = display;
});

let minusButton = document.querySelector("#minusButton");
minusButton.addEventListener("click",()=>{
  firstNumber = Number(display);
  // operator = "minus";
  display = "";
  document.getElementById("displayField").innerHTML = display;
});

let multiplyButton = document.querySelector("#multiplyButton");
multiplyButton.addEventListener("click",()=>{
  firstNumber = Number(display);
  // operator = "multiply";
  display = "";
  document.getElementById("displayField").innerHTML = display;
});

let divideButton = document.querySelector("#divideButton");
divideButton.addEventListener("click",()=>{
  if (firstNumber === "") {
    firstNumber = Number(display);
    // operator = "divide";
    display = "";
    document.getElementById("displayField").innerHTML = display;
  } else {
    //should display the result, not the second number you press!
    display = operate("/", firstNumber, Number(display));
    document.getElementById("displayField").innerHTML = display;
  }
});

//basically this should just be the operate part of what's in the above functions
// let equalsButton = document.querySelector("#equalsButton");
// equalsButton.addEventListener("click",()=>{
//   firstNumber = Number(display);
//   operator = "divide";
//   display = "";
//   document.getElementById("displayField").innerHTML = display;
// });




// let equalsPressed = function(operatorYouClicked) {
//   firstNumber = Number(display);
//   operator = plus;
//   display = "";
// }
//whne operator is pressed, run function to save display, save operation chosen, and operated on them when = is pressed.

//store first number input into the calc when a user presses an operator, save operation chosen, operate on them when = is pressed.
