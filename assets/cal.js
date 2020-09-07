"use strict";

let checkUniOperator = 0;
let firstNumber = 0;
let secondNumber = 0;
let checkDot = 0;
const display = document.querySelector(".screen");
const operator = document.querySelectorAll(".operator");
const stnad = document.querySelectorAll(".stand");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const number = document.querySelectorAll(".number");

var operatorLast = [];

number.forEach((number) => {
  number.addEventListener("click", () => {
    //console.log(display.value);
    number.classList.add("number--clicked");
    setTimeout(() => {
      number.classList.remove("number--clicked");
    }, 100);
    if (checkUniOperator != 0) {
      display.value === "0"
        ? (display.value = number.innerHTML)
        : (display.value += number.innerHTML);
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

equal.forEach((equal) => {
  equal.addEventListener("click", () => {
    display.value = firstNumber + secondNumber;
    firstNumber = display.value;
    secondNumber = 0;
    checkUniOperator = 0;
    checkDot = 0;
  });
});

operator.forEach((operator) => {
  operator.addEventListener("click", () => {
    //console.log(display.value);
    if ((checkUniOperator = 0)) {
      switch (operator.innerHTML) {
        case "+":
          firstNumber = display.value;
          checkUniOperator += 1;
          break;
        case "-":
          firstNumber = display.value;
          checkUniOperator += 1;
          break;
        case "*":
          firstNumber = display.value;
          checkUniOperator += 1;
          break;
        case "/":
          firstNumber = display.value;
          checkUniOperator += 1;
          break;
      }
    } else {
      switch (operator.innerHTML) {
        case "+":
          firstNumber = display.value;
          checkUniOperator += 1;
          break;
        case "-":
          firstNumber = display.value;
          checkUniOperator += 1;
          break;
        case "*":
          firstNumber = display.value;
          checkUniOperator += 1;
          break;
        case "/":
          firstNumber = display.value;
          checkUniOperator += 1;
          break;
      }
    }
    operator.classList.add("operator--clicked");
    setTimeout(() => {
      operator.classList.remove("operator--clicked");
    }, 100);
  });
});
