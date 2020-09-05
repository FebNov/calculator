"use strict";
class Calculator {
  // init the calculator
  constructor() {
    let checkUni = 0;
    let firstNumber = 0;
    let sign;
    const display = document.querySelector(".calculator__display");
    const operator = document.querySelectorAll(".operator");
    const zeroStart = document.querySelector(".bigzero");
    const clearC = document.querySelector(".clear");
    const equal = document.querySelectorAll(".equal");
    const dot = document.querySelectorAll(".dot");
    const numberListenser = document.querySelectorAll(".calculator__input");

    calculator.init();
  }
  // initialization the calculator
  init() {
    let displayVal = 0;
    let firstInput = displayVal[0];
    display.innerHTML = displayVal;
    calculator.listenEvent();
  }
  //add function for lisen "click" event
  listenEvent() {
    numberListenser.forEach((nlsner) => {
      nlsner.addEventListener("click", calculator.handleClick());
    });
  }
  // all the input add into displayVal as string
  handleClick(nlsnerInfo) {
    this.displayVal += numberListenser.innerHTML;
    while (displayVal[0] === displayVal[1]) {
      displayVal.pop();
    }
    if (this.displayVal[this.displayVal.length - 1] === clearC.innerHTML) {
      calculator.clearAll();
    }
    //havent consider dot
    if (this.displayVal[this.displayVal.length - 1] === operator.innerHTML) {

      calculator.method();
    } else calculator.displayScreen();
  }

  //display the string to to calculator display screen
  displayScreen() {
    display.innerHTML = displayVal;
  }
  //run opeator
  method() {
    calculator.uniOperator();
    if (checkUni === 1) {
        if (this.displayVal[this.displayVal.length - 1] === "+" || this.displayVal[this.displayVal.length - 1] === "-" || this.displayVal[this.displayVal.length - 1] === "*"|| this.displayVal[this.displayVal.length - 1] === "/") {
            while (firstNumber === 0) firstNumber = displayVal;
            displayVal= firstNumber 
      }
    }else 
  }

  //like "dot", only display once, or "operator" only work at last press
  uniOperator() {
    while(checkUni===0){
        sign = operator
        checkUni ++;
    }
    return checkUni;
  }
  //reset to 0
  clearAll() {
    calculator.init();
  }
}
window.onload = function () {
  const calculator = new Calculator();
};
