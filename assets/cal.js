"use strict";

let checkUniOperator = 0;
let firstNumber = 0;
let secondNumber = 0;
let checkDot = 0;
let methodOperator = undefined;
const display = document.querySelector(".screen");
const operator = document.querySelectorAll(".operator");
const stnad = document.querySelectorAll(".stand");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const number = document.querySelectorAll(".number");

number.forEach((number) => {
  number.addEventListener("click", () => {
    if (checkUniOperator === 1) {
      display.value = 0;
      display.value === "0"
        ? (display.value = number.innerHTML)
        : (display.value += number.innerHTML);
      checkUniOperator++;
    } else if (checkUniOperator > "1") {
      display.value += number.innerHTML;
    } else {
      display.value === "0"
        ? (display.value = number.innerHTML)
        : (display.value += number.innerHTML);
    }
  });
});

stnad.forEach((stand) => {
  stand.addEventListener("click", () => {
    switch (stand.innerHTML) {
      case "C":
        display.value = 0;
        checkUniOperator = 0;
        firstNumber = 0;
        secondNumber = 0;
        checkDot = 0;
        break;
      case "-/+":
        display.value = display.value * -1;
        break;
      case "%":
        display.value = display.value / 100;
        break;
    }
  });
});
dot.addEventListener("click", () => {
  if (checkDot != 0) {
    return;
  } else {
    display.value += dot.innerHTML;
    checkDot = 1;
  }
});

equal.addEventListener("click", () => {
  while (display.value === "520") {
    display.value = "I Love SYD";
  }
  if (firstNumber === 0) {
    firstNumber = display.value;
    console.log("if firstNumber =0 " + firstNumber);
  } else if (secondNumber === 0) {
    secondNumber = display.value;
    switch (methodOperator) {
      case "+":
        display.value = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        display.value = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "*":
        display.value = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        display.value = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
    }
    firstNumber = display.value;
    secondNumber = 0;
    console.log("if secibdNumber = 0 && input first + second  " + firstNumber);
  } else {
    switch (methodOperator) {
      case "+":
        display.value = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        display.value = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "*":
        display.value = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        display.value = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
    }
    firstNumber = display.value;
    secondNumber = 0;
    console.log("if t first & second !=0 " + firstNumber);
  }
  methodOperator = undefined;
  checkUniOperator = 0;

  checkDot = 0;
  display.value === `${firstNumber}.`
    ? (display.value = 0)
    : (display.value = firstNumber);
});

operator.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (checkUniOperator === 0) {
      switch (operator.innerHTML) {
        case "+":
          firstNumber = display.value;
          checkUniOperator += 1;
          methodOperator = "+";
          break;
        case "-":
          firstNumber = display.value;
          checkUniOperator += 1;
          methodOperator = "-";
          break;
        case "*":
          firstNumber = display.value;
          checkUniOperator += 1;
          methodOperator = "*";
          break;
        case "/":
          firstNumber = display.value;
          checkUniOperator += 1;
          methodOperator = "/";
          break;
      }
    } // if press twice operator, only work once
    else {
      switch (operator.innerHTML) {
        case "+":
          if (secondNumber === "0") {
            secondNumber = display.value;
            console.log(secondNumber);
          } else {
            display.value = parseFloat(firstNumber) + parseFloat(secondNumber);
            firstNumber = display.value;
          }
          checkUniOperator = 0;
          secondNumber = 0;
          methodOperator = "+";
        case "-":
          secondNumber = display.value;

          methodOperator = "-";
          break;
        case "*":
          secondNumber = display.value;

          methodOperator = "*";
          break;
        case "/":
          secondNumber = display.value;

          methodOperator = "/";
          break;
      }
    }
  });
});
