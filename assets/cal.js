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

var operatorLast = [];

number.forEach((number) => {
  number.addEventListener("click", () => {
    //console.log(display.value);
    // number.classList.add("number--clicked");
    // setTimeout(() => {
    //   number.classList.remove("number--clicked");
    // }, 100);
    // console.log(methodOperator);
    if (checkUniOperator != 0) {
      // console.log("1");
      // if (firstNumber === "0") {
      //   firstNumber = display.value;
      //   console.log("firstNumber is" + firstNumber);
      // } else {
      //   secondNumber = display.value;
      //   console.log("2 loop firstNumber is" + firstNumber);
      //   console.log("2 loop secondNumber is" + secondNumber);
      // }
      // console.log("2 loop firstNumber is" + firstNumber);
      // secondNumber = display.value;
      // console.log("2 loop secondNumber is" + secondNumber);

      display.value = 0;
      display.value === "0"
        ? (display.value = number.innerHTML)
        : (display.value += number.innerHTML);
    } else {
      // console.log("0");
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
  if (firstNumber === 0) {
    firstNumber = display.value;
    console.log("if firstNumber =0 " + firstNumber);
  } else if (secondNumber === 0) {
    secondNumber = display.value;

    console.log("if secondNumber =0 " + secondNumber);
    // console.log("1");
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
});

operator.forEach((operator) => {
  operator.addEventListener("click", () => {
    //console.log(display.value);
    // console.log("3");
    if (checkUniOperator === 0) {
      switch (operator.innerHTML) {
        case "+":
          firstNumber = display.value;
          console.log("1 loop firstNumber is" + firstNumber);
          checkUniOperator += 1;
          methodOperator = "+";
          // console.log("+++");
          // console.log(checkUniOperator);
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
          } else {
            display.value = parseFloat(firstNumber) + parseFloat(secondNumber);
            firstNumber = display.value;
            checkUniOperator = 0;
            secondNumber = 0;
          }
          // console.log("2 loop secondirstNumber is" + secondtNumber);
          // checkUniOperator = 0;
          methodOperator = "+";
          // console.log(checkUniOperator);
          // console.log("2");
          break;
        case "-":
          secondNumber = display.value;
          // checkUniOperator = 0;
          methodOperator = "-";
          break;
        case "*":
          secondNumber = display.value;
          // checkUniOperator = 0;
          methodOperator = "*";
          break;
        case "/":
          secondNumber = display.value;
          // checkUniOperator = 0;
          methodOperator = "/";
          break;
      }
    }
    // operator.classList.add("operator--clicked");
    // setTimeout(() => {
    //   operator.classList.remove("operator--clicked");
    // }, 100);
  });
});
