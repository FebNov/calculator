"use strict";
class Calculator {
  // init the calculator
  constructor() {
    let checkUni = 0;
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
    while (displayVal) {}
    if (this.displayVal[this.displayVal.length - 1] === clearC.innerHTML) {
      calculator.clearAll();
    }
    if (this.displayVal[this.displayVal.length - 1] === operator.innerHTML) {
      calculator.method();
    }
  }
  displayScreen() {
    return;
  }
  //run opeator
  method() {
    return;
  }

  //like "dot", only display once, or "operator" only work at last press
  uniOperator() {
    let checkUni = 0;
    while (this.displayVal) return;
  }
  //reset to 0
  clearAll() {
    calculator.init();
  }
}
window.onload = function () {
  const calculator = new Calculator();
};
